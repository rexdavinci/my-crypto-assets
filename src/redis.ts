/* eslint-disable @typescript-eslint/unbound-method */
import { createClient } from 'redis';
import { promisify } from 'util';
import config from './config';

const client = createClient({
  url: config.REDIS_URL,
});
export const getAsync = promisify(client.get).bind(client);
export const setAsync = promisify(client.set).bind(client);
export const flushAsync = promisify(client.flushdb).bind(client);
