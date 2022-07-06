import { CronJob } from 'cron';
import fetchCoins from './fetchCoins';

// eslint-disable-next-line @typescript-eslint/no-misused-promises
const job = new CronJob('* */6 * * *', fetchCoins, null, true, 'Asia/Bangkok');

export default job;
