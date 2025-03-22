import { useGetCoinsQuery } from '@/utils/api/hooks';
import { computed } from 'vue';

export const useHomeView = () => {
  const getStatsQuery = useGetCoinsQuery();

  return { coins: computed(() => getStatsQuery.data.value?.data.data.coins ?? []) };
};
