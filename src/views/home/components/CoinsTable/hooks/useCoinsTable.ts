import { useGetCoinsQuery } from '@/utils/api/hooks';
import { computed } from 'vue';

export const useCoinsTable = () => {
  const getCoinsQuery = useGetCoinsQuery();

  const coins = computed(() => getCoinsQuery.data.value?.data.data.coins);

  const toggleFavorite = () => {
    console.log('sdsadsadsadsadsd');
  };

  return { coins, toggleFavorite };
};
