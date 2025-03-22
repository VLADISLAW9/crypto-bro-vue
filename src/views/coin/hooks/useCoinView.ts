import { useGetCoinQuery } from '@/utils/api/hooks';
import type { ChartData } from 'chart.js';
import { computed, ref, watch } from 'vue';
import { useRoute } from 'vue-router';

export const useCoinView = () => {
  const route = useRoute();
  const getCoinQuery = useGetCoinQuery({ params: { uuid: `${route.params.uuid}` } });

  const coin = computed(() => getCoinQuery.data.value?.data.data.coin);

  const coinChartData = ref<ChartData>({
    labels: [],
    datasets: [
      {
        label: 'Цена за 24 часа',
        data: [],
        fill: true,
        borderColor: 'rgba(52, 211, 153, 1)',
        tension: 0.1,
        backgroundColor: 'rgba(52, 211, 153, 0.1)'
      }
    ]
  });

  watch(
    () => getCoinQuery.data.value,
    (newData) => {
      if (newData?.data.data.coin) {
        const sparkline = newData.data.data.coin.sparkline
          .slice(0, -1)
          .map((item: string) => Number(item));

        coinChartData.value.labels = Array.from({ length: 23 }, (_, i) => `${i + 1}:00`);
        coinChartData.value.datasets[0].data = sparkline;
      }
    },
    { immediate: true }
  );

  return {
    isPending: computed(() => getCoinQuery.isPending.value),
    coin,
    coinChartData
  };
};
