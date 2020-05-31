/* eslint-disable no-new */
import http from 'http';
import { createReadStream } from 'fs';
import { createGunzip } from 'zlib';
import express from 'express';
import { CronJob } from 'cron';
import fetchCoins from './fetchCoins';


const app = express();
app.use(express.static('dist'));

// eslint-disable-next-line @typescript-eslint/no-misused-promises
new CronJob('*/30 */1 * * *', fetchCoins, null, true, 'Asia/Bangkok');

app.use('/api/data', (_req, res) => {
  // Read file
  const unzip = createGunzip();
  const readable = createReadStream('./data.json.gz');
  readable.on('error', (err) => {
    console.log(err);
  });
  return readable.pipe(unzip).pipe(res.type('json'));
});


http
  .createServer(app)
  .listen(process.env.PORT, () => {
    console.log(`Listening on port ${process.env.PORT}`);
  });
