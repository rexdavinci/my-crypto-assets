"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.flushAsync = exports.setAsync = exports.getAsync = void 0;
/* eslint-disable @typescript-eslint/unbound-method */
const redis_1 = require("redis");
const util_1 = require("util");
const { REDISCLOUD_URL } = process.env;
const client = redis_1.createClient(REDISCLOUD_URL, { no_ready_check: true });
exports.getAsync = util_1.promisify(client.get).bind(client);
exports.setAsync = util_1.promisify(client.set).bind(client);
exports.flushAsync = util_1.promisify(client.flushdb).bind(client);
