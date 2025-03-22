interface MutationSettings<Params = void, Func = unknown> {
  config?: ApiRequestConfig;
  options?: import('@tanstack/vue-query').UseMutationOptions<
    Awaited<ReturnType<Func>>,
    any,
    Params,
    any
  >;
}

interface QuerySettings<Func = unknown> {
  config?: ApiRequestConfig;
  options?: Omit<
    import('@tanstack/vue-query').UseQueryOptions<Awaited<ReturnType<Func>>>,
    'queryKey'
  >;
}

interface CoinRankingBaseResponse<DATA> {
  data: DATA;
  status: string;
}

interface CoinListItem {
  '24hVolume': string;
  btcPrice: string;
  change: string;
  coinrankingUrl: string;
  color: string;
  contractAddresses: string[];
  iconUrl: string;
  listedAt: number;
  lowVolume: boolean;
  marketCap: string;
  name: string;
  price: string;
  rank: number;
  sparkline: string[];
  symbol: string;
  uuid: string;
}

interface Link {
  name: string;
  type: string;
  url: string;
}

interface Notice {
  type: string;
  value: string;
}

interface Supply {
  circulating: string;
  confirmed: boolean;
  max: string;
  supplyAt: number;
  total: string;
}

interface AllTimeHigh {
  price: string;
  timestamp: number;
}

interface Coin {
  '24hVolume': string;
  allTimeHigh: AllTimeHigh;
  btcPrice: string;
  change: string;
  coinrankingUrl: string;
  color: string;
  contractAddresses: any[]; // или можно уточнить тип, если известна структура
  description: string;
  fullyDilutedMarketCap: string;
  iconUrl: string;
  links: Link[];
  listedAt: number;
  lowVolume: boolean;
  marketCap: string;
  name: string;
  notices: Notice[];
  numberOfExchanges: number;
  numberOfMarkets: number;
  price: string;
  priceAt: number;
  rank: number;
  sparkline: string[];
  supply: Supply;
  symbol: string;
  tags: string[];
  uuid: string;
  websiteUrl: string;
}

interface Stats {
  bestCoins: Coin[];
  btcDominance: number;
  newestCoins: Coin[];
  total24hVolume: string;
  totalCoins: number;
  totalExchanges: number;
  totalMarketCap: string;
  totalMarkets: number;
}
