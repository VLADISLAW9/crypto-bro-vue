import { useFavoriteCoinsStore } from '@/utils/stores';
import { computed } from 'vue';

export const useFavoriteView = () => {
  const favoriteCoinsStore = useFavoriteCoinsStore();

  return {
    favoriteCoins: computed(() => favoriteCoinsStore.favoriteCoins)
  };
};
