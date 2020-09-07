"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.flushAsync = exports.setAsync = exports.getAsync = void 0;
/* eslint-disable @typescript-eslint/unbound-method */
const redis_1 = require("redis");
const util_1 = require("util");
// const { NODE_ENV, REDISCLOUD_URL } = process.env;
// const client = (/development/i).test(NODE_ENV as string) ? createClient() : createClient(REDISCLOUD_URL as string, { no_ready_check: true });
const client = redis_1.createClient();
exports.getAsync = util_1.promisify(client.get).bind(client);
exports.setAsync = util_1.promisify(client.set).bind(client);
exports.flushAsync = util_1.promisify(client.flushdb).bind(client);
