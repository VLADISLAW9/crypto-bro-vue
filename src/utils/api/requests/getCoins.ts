import type { FetchesRequestConfig, FetchesResponse } from '@siberiacancode/fetches';

import { coinRankingApi } from '../instance';

type GetCoinsResponse = FetchesResponse<
  CoinRankingBaseResponse<{
    coins: CoinListItem[];
  }>
>;

export type GetCoinsConfig = FetchesRequestConfig<{
  limit?: number;
  offset?: number;
}>;

export const getCoins = async (config?: GetCoinsConfig): Promise<GetCoinsResponse> =>
  await coinRankingApi.get('/coins', config);
