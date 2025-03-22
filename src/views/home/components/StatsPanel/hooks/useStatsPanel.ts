import { useGetStatsQuery } from '@/utils/api/hooks';
import { useFavoriteCoinsStore } from '@/utils/stores';
import { computed } from 'vue';

export const useStatsPanel = () => {
  const favoriteCoinsStore = useFavoriteCoinsStore();
  const getStatsQuery = useGetStatsQuery();

  const addFavoriteCoin = (coin: Coin) => favoriteCoinsStore.addFavoriteCoin(coin);

  return {
    stats: computed(() => getStatsQuery.data.value?.data.data)
  };
};
