interface Coin {
  id: number;
  uuid: string;
  slug?: string;
  symbol?: string;
  name?: string;
  description?: string;
  color?: string;
  iconType?: string;
  iconUrl?: string;
  websiteUrl?: string;
  socials?: {name?: string; type?: string; url?: string}[];
  links?: {name?: string; type?: string; url?: string}[];
  confirmedSupply?: boolean;
  numberOfMarkets?: number;
  numberOfExchanges?: number;
  type?: string;
  volume?: number;
  marketCap?: number;
  price?: string;
  circulatingSupply?: number;
  totalSupply?: number;
  approvedSupply?: boolean;
  firstSeen?: number;
  change?: number;
  rank?: number;
  history?: string[];
  allTimeHigh?: {
    price?: string;
    timestamp?: number;
  };
  penalty?: boolean;
}

interface GlobalInfo {
  base: string;
  limit: number;
  offset: number;
  order: string;
  total: number;
  total24hVolume: number;
  totalExchanges: number;
  totalMarketCap: number;
  totalMarkets: number;
  updatedAt: string;
}

interface State {
  coins: Coin[];
  globalInfo: GlobalInfo | null;
  base: {
    symbol: string;
    sign: string;
  } | null;
}

export default State;
