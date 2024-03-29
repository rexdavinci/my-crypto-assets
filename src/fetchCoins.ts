import axios from 'axios';
import {
  CoinRanking, HttpResponse, Coin, TrimmedCoins,
} from './interfaces';
import { setAsync, flushAsync } from './redis';

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
    `https://api.coinranking.com/v2/coins?limit=100&timePeriod=24h&base=USD${option || ''}`, {
      headers: {
        'x-access-token': process.env.API_KEY,
      },
    },
  );
  return response;
}

const saveNewFile = async (newData: CoinRanking): Promise<boolean> => {
  const stringifiedData = JSON.stringify(newData);
  const flushed = await flushAsync();
  console.log('flushDB value is', flushed === 'OK');
  if (flushed === 'OK') {
    await setAsync('assets', stringifiedData);
    console.log(`finished writing to file at: ${new Date().toLocaleString()}`);
    return true;
  }
  console.log('Couldn\'t finish writing to the db at this time');
  return false;
};

export default async function fetchCoins(): Promise<void> {
  let result: CoinRanking = { data: { stats: { total: 0, updatedAt: 0 }, coins: [] } };
  const callAPI: HttpResponse<CoinRanking> = await request();
  if ((/ok/i).test(callAPI.statusText)) {
    result = { ...callAPI.data };
    let offset = 100;
    let index = 1;
    while (result.data.coins.length < result.data.stats.total) {
      console.log(`${index}/${Math.ceil(result.data.stats.total / 100) - 1} calls. ${new Date().toLocaleString()}`);
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
      index += 1;
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