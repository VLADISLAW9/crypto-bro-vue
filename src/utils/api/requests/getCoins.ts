import type { FetchesRequestConfig, FetchesResponse } from '@siberiacancode/fetches';

import { coinRankingApi } from '../instance';

type getCoinsResponse = FetchesResponse<
  CoinRankingBaseResponse<{
    coins: CoinListItem[];
  }>
>;

type getCoinsConfig = FetchesRequestConfig<{
  limit?: number;
  offset?: number;
}>;

export const getCoins = async (config?: getCoinsConfig): Promise<getCoinsResponse> =>
  await coinRankingApi.get('/coins', config);
