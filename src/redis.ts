/* eslint-disable @typescript-eslint/unbound-method */
import { createClient } from 'redis';
import { promisify } from 'util';

const { REDISCLOUD_URL } = process.env;
const client = createClient(REDISCLOUD_URL as string, { no_ready_check: true });

export const getAsync = promisify(client.get).bind(client);
export const setAsync = promisify(client.set).bind(client);
export const flushAsync = promisify(client.flushdb).bind(client);
