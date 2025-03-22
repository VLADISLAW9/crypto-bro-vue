import { useFavoriteCoinsStore } from '@/utils/stores';

export const useCoinsTable = () => {
  const favoriteCoinsStore = useFavoriteCoinsStore();

  const isFavoriteCoin = (uuid: string) => favoriteCoinsStore.favoriteCoinsUUIDs.includes(uuid);

  const toggleFavorite = (coin: Coin) => {
    if (isFavoriteCoin(coin.uuid)) return favoriteCoinsStore.removeFavoriteCoin(coin.uuid);
    favoriteCoinsStore.addFavoriteCoin(coin);
  };

  return { toggleFavorite, isFavoriteCoin };
};
