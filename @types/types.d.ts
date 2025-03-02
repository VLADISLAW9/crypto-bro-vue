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

type BestCoin = Pick<CoinListItem, 'coinrankingUrl' | 'iconUrl' | 'name' | 'symbol' | 'uuid'>;
type NewestCoin = BestCoins;

interface Stats {
  bestCoins: BestCoin[];
  btcDominance: number;
  newestCoins: NewestCoin[];
  total24hVolume: string;
  totalCoins: number;
  totalExchanges: number;
  totalMarketCap: string;
  totalMarkets: number;
}
