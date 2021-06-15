/* eslint-disable no-new */
import http from 'http';
import express from 'express';
import compression from 'compression';
import config from './config';
import cronjob from './cronJob';
import { getAsync } from './redis';

const isDevServer = config.env === 'development';
cronjob.start();
const app = express();

app.use(compression());
if (!isDevServer) {
  app.use(express.static('dist'));
}
// eslint-disable-next-line @typescript-eslint/no-misused-promises
app.use('/api/data', async (_req, res) => {
  if (isDevServer) {
    res.header('Access-Control-Allow-Origin', 'http://localhost:8080');
  }
  const data = await getAsync('assets');
  return res.status(200).json({ assets: data });
});

app.use('*', (_req, res) => res.redirect('/'));

http.createServer(app).listen(config.port, () => {
  console.log(`Listening on port ${config.port}`);
});
