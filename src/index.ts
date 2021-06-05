/* eslint-disable no-new */
// import dotenv from 'dotenv';
import { config } from 'dotenv';
config()
import http from 'http';
import express from 'express';
import compression from 'compression';
import cronjob from './cronJob';
import { getAsync } from './redis';

const isDevServer = process.env.NODE_ENV === 'development';
cronjob.start();
const app = express();

app.use(compression());
if (!isDevServer) {
  app.use(express.static('dist'));
}
app.use('/api/data', async (_req, res) => {
  if (isDevServer) {
    res.header('Access-Control-Allow-Origin', 'http://localhost:8080');
  }
  const data = await getAsync('assets');
  return res.status(200).json({ assets: data });
});

app.use('*', (_req, res) => res.redirect('/'));

http.createServer(app).listen(process.env.PORT, () => {
  console.log(`Listening on port ${process.env.PORT}`);
});
