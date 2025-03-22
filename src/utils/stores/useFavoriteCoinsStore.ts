import { defineStore } from 'pinia';

export const useFavoriteCoinsStore = defineStore('favoriteCoins', {
  state: () => ({
    favoriteCoins: [] as Coin[]
  }),
  getters: {
    favoriteCoinsUUIDs: (state) => state.favoriteCoins.map((coin) => coin.uuid)
  },
  actions: {
    addFavoriteCoin(coin: Coin) {
      this.favoriteCoins.push(coin);
    },
    removeFavoriteCoin(uuid: string) {
      this.favoriteCoins = this.favoriteCoins.filter((coin) => coin.uuid !== uuid);
    }
  }
});
