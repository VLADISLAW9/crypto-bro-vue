import fetches from '@siberiacancode/fetches';

export const coinRankingApi = fetches.create({
  baseURL: import.meta.env.VITE_COIN_RANKING_API_URL,
  headers: {
    'Content-Type': 'application/json',
    'x-access-token': import.meta.env.VITE_COIN_RANKING_API_KEY
  }
});
