"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.setAsync = exports.getAsync = void 0;
/* eslint-disable @typescript-eslint/unbound-method */
const redis = __importStar(require("redis"));
const util_1 = require("util");
const redisUri = process.env.REDISCLOUD_URL;
const client = redis.createClient(redisUri, { no_ready_check: true });
const getAsync = util_1.promisify(client.get).bind(client);
exports.getAsync = getAsync;
const setAsync = util_1.promisify(client.set).bind(client);
exports.setAsync = setAsync;
