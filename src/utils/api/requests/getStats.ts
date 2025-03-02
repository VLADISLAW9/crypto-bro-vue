import type { FetchesRequestConfig, FetchesResponse } from '@siberiacancode/fetches';

import { coinRankingApi } from '../instance';

type getStatsResponse = FetchesResponse<CoinRankingBaseResponse<Stats>>;

type getStatsConfig = FetchesRequestConfig<{
  referenceCurrencyUuid?: string;
}>;

export const getStats = async (config?: getStatsConfig): Promise<getStatsResponse> =>
  await coinRankingApi.get('/stats', config);
