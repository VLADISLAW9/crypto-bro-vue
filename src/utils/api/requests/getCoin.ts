import type { FetchesRequestConfig, FetchesResponse } from '@siberiacancode/fetches';

import { coinRankingApi } from '../instance';

type GetCoinResponse = FetchesResponse<
  CoinRankingBaseResponse<{
    coin: Coin;
  }>
>;

export type GetCoinConfig = FetchesRequestConfig<{
  uuid: string;
}>;

export const getCoin = async ({ params, config }: GetCoinConfig): Promise<GetCoinResponse> =>
  await coinRankingApi.get(`/coin/${params.uuid}`, config);
