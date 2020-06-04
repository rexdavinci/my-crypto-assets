/* eslint-disable no-new */
import http from 'http';
import express from 'express';
import cronjob from './cronJob';
import { getAsync } from './redis';

cronjob.start();

const app = express();
app.use(express.static('dist'));

app.use('/api/data', async (_req, res) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:8080');
  const data = await getAsync('assets');
  return res.status(200).json({ assets: JSON.parse(data) });
});

http.createServer(app).listen(process.env.PORT, () => {
  console.log(`Listening on port ${process.env.PORT}`);
});
