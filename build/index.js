"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable no-new */
const http_1 = __importDefault(require("http"));
const fs_1 = require("fs");
const zlib_1 = require("zlib");
const express_1 = __importDefault(require("express"));
const cron_1 = require("cron");
const fetchCoins_1 = __importDefault(require("./fetchCoins"));
const app = express_1.default();
app.use(express_1.default.static('dist'));
// eslint-disable-next-line @typescript-eslint/no-misused-promises
new cron_1.CronJob('*/30 */1 * * *', fetchCoins_1.default, null, true, 'Asia/Bangkok');
app.use('/api/data', (_req, res) => {
    // Read file
    const unzip = zlib_1.createGunzip();
    const readable = fs_1.createReadStream('./data.json.gz');
    readable.on('error', (err) => {
        console.log(err);
    });
    return readable.pipe(unzip).pipe(res.type('json'));
});
http_1.default
    .createServer(app)
    .listen(process.env.PORT, () => {
    console.log(`Listening on port ${process.env.PORT}`);
});
