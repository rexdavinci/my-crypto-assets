"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable @typescript-eslint/no-misused-promises */
const cron_1 = require("cron");
const fetchCoins_1 = __importDefault(require("./fetchCoins"));
// eslint-disable-next-line @typescript-eslint/no-misused-promises
const job = new cron_1.CronJob('*/30 */1 * * *', fetchCoins_1.default, null, true, 'Asia/Bangkok');
exports.default = job;
