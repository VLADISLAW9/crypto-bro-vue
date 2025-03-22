import { defineStore } from 'pinia';

export const useFavoriteCoinsStore = defineStore('favoriteCoins', {
  state: () => ({
    favoriteCoins: [] as Coin[]
  }),
  actions: {
    isFavoriteCoin(uuid: string) {
      return this.favoriteCoins.map((item) => item.uuid).includes(uuid);
    },
    toggleFavoriteCoin(coin: Coin) {
      if (this.favoriteCoins.map((item) => item.uuid).includes(coin.uuid))
        return (this.favoriteCoins = this.favoriteCoins.filter((item) => item.uuid !== coin.uuid));

      this.favoriteCoins.push(coin);
    }
  }
});
