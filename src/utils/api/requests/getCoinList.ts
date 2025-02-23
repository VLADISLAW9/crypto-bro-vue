import { bybitApi } from '../instance';

export const getCoinList = async () => await bybitApi.get('/v5/asset/exchange/query-coin-list');
