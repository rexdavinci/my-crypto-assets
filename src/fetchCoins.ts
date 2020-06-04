import axios from 'axios';
import {
  CoinRanking, HttpResponse, Coin, TrimmedCoins,
} from './interfaces';
import { setAsync } from './redis';

const trimCoins = (coins: Coin[]): TrimmedCoins[] => coins.map((coin: Coin) => {
  const trimmedCoin: Coin = {
    id: coin.id,
    rank: coin.rank,
    name: coin.name,
    symbol: coin.symbol,
    marketCap: coin.marketCap,
    price: coin.price,
    change: coin.change,
    uuid: coin.uuid,
    slug: coin.slug,
    iconUrl: coin.iconUrl,
  };
  return trimmedCoin;
});

async function request<T>(option?: string): Promise<HttpResponse<T>> {
  const response: HttpResponse<T> = await axios(
    `https://api.coinranking.com/v1/public/coins?limit=100&timePeriod=24h&sort=coinranking&order=desc&base=USD${option || ''}`,
  );
  return response;
}

const saveNewFile = async (newData: CoinRanking): Promise<void> => {
  const stringifiedData = JSON.stringify(newData);
  await setAsync('assets', stringifiedData);
  console.log(`finished writing to file at: ${new Date().toLocaleString()}`);
};

export default async function fetchCoins(): Promise<void> {
  let result: CoinRanking = { data: { stats: { total: 0, updatedAt: 0 }, coins: [] } };
  const callAPI: HttpResponse<CoinRanking> = await request();
  if ((/ok/i).test(callAPI.statusText)) {
    result = { ...callAPI.data };
    console.log(`
      base case call made.
      ${Math.ceil(result.data.stats.total / 100)} more call to make to get ${result.data.stats.total} coin information, 
      time: ${new Date().toLocaleString()}
    `);
    let offset = 100;
    while (result.data.coins.length < result.data.stats.total) {
      console.log(`made a new call. ${new Date().toLocaleString()}`);
      // eslint-disable-next-line no-await-in-loop
      const callAPIAgain: HttpResponse<CoinRanking> = await request(`&offset=${offset}`);
      // If there is an error with the query but some coins have been fetched
      if (callAPIAgain.status !== 200 && result.data.coins.length > 0) {
        break;
      }
      result = {
        ...result,
        data: {
          ...result.data,
          coins: [...result.data.coins, ...callAPIAgain.data.data.coins],
        },
      };
      offset += 100;
    }
    const now = Date.now();
    console.log(`
      Done querying resource ${result.data.stats.total} of ${result.data.coins.length}, 
      writing to file..
      started: ${new Date().toLocaleString()}
    `);
    result.data.coins = trimCoins(result.data.coins);
    result.data.stats.updatedAt = now;
    saveNewFile(result);
  }
}
