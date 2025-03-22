import { computed } from 'vue';

import { useFavoriteCoinsStore } from '@/utils/stores';

export const useFavoriteView = () => {
  const favoriteCoinsStore = useFavoriteCoinsStore();

  return {
    favoriteCoins: computed(() => favoriteCoinsStore.favoriteCoins)
  };
};
