import { AxiosResponse } from 'axios';
export interface TrimmedCoins {
    id: number;
    rank?: number;
    name?: string;
    symbol?: string;
    marketCap?: number;
    price?: string;
    change?: number;
    uuid?: string;
    slug?: string;
    iconUrl?: string;
}
export interface Coin {
    id: number;
    uuid?: string;
    slug?: string;
    symbol?: string;
    name?: string;
    description?: string;
    color?: string;
    iconType?: string;
    iconUrl?: string;
    websiteUrl?: string;
    socials?: {
        name?: string;
        type?: string;
        url?: string;
    }[];
    links?: {
        name?: string;
        type?: string;
        url?: string;
    }[];
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
export interface CoinRanking {
    status?: string;
    data: {
        stats: {
            updatedAt?: number;
            total: number;
            offset?: number;
            limit?: number;
            order?: string;
            totalMarkets?: number;
            totalExchanges?: number;
            totalMarketCap?: number;
            total24hVolume?: number;
        };
        base?: {
            symbol: string;
            sign: string;
        };
        coins: TrimmedCoins[];
    };
}
export interface HttpResponse<T> extends AxiosResponse {
    data: T;
}
export interface CoinRankingResponse<T> extends Response {
    data: T;
}
