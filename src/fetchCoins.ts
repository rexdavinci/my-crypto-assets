import { writeFile } from 'fs';
import { gzip } from 'zlib';
import axios from 'axios';
import { CoinRanking, HttpResponse } from './interfaces';

async function request<T>(option?: string): Promise<HttpResponse<T>> {
  const response: HttpResponse<T> = await axios(
    `https://api.coinranking.com/v1/public/coins?limit=100&timePeriod=24h&sort=coinranking&order=desc&base=USD${option || ''}`,
  );
  return response;
}


const saveNewFile = (newData: CoinRanking): void => {
  const stringifiedData = JSON.stringify(newData);
  gzip(Buffer.from(stringifiedData, 'utf8'), (err, data): void => {
    if (err) {
      console.log(`Error creating zip, time: ${new Date().toLocaleString()}`);
    } else {
      writeFile('./data.json.gz', data, (exception): void => {
        if (exception) {
          console.log('Error writing file to server');
        } else {
          console.log(`new data saved to file successfully, completed: ${new Date().toLocaleString()}`);
        }
      });
    }
  });
};

export default async function fetchCoins(): Promise<void> {
  let result: CoinRanking = { data: { stats: { total: 0, updatedAt: '' }, coins: [] } };
  const callAPI: HttpResponse<CoinRanking> = await request();
  if (callAPI.statusText.toLocaleLowerCase() === 'ok') {
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
    const now = new Date().toLocaleString();
    console.log(`
      Done querying resource ${result.data.stats.total} of ${result.data.coins.length}, 
      writing to file..
      started: ${now}
    `);
    result.data.stats.updatedAt = now;
    saveNewFile(result);
  }
}
