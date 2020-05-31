"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const zlib_1 = require("zlib");
const axios_1 = __importDefault(require("axios"));
function request(option) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield axios_1.default(`https://api.coinranking.com/v1/public/coins?limit=100&timePeriod=24h&sort=coinranking&order=desc&base=USD${option || ''}`);
        return response;
    });
}
const saveNewFile = (newData) => {
    const stringifiedData = JSON.stringify(newData);
    zlib_1.gzip(Buffer.from(stringifiedData, 'utf8'), (err, data) => {
        if (err) {
            console.log(`Error creating zip, time: ${new Date().toLocaleString()}`);
        }
        else {
            fs_1.writeFile('./data.json.gz', data, (exception) => {
                if (exception) {
                    console.log('Error writing file to server');
                }
                else {
                    console.log(`new data saved to file successfully, completed: ${new Date().toLocaleString()}`);
                }
            });
        }
    });
};
function fetchCoins() {
    return __awaiter(this, void 0, void 0, function* () {
        let result = { data: { stats: { total: 0, updatedAt: '' }, coins: [] } };
        const callAPI = yield request();
        if (callAPI.statusText.toLocaleLowerCase() === 'ok') {
            result = Object.assign({}, callAPI.data);
            console.log(`
      base case call made.
      ${Math.ceil(result.data.stats.total / 100)} more call to make to get ${result.data.stats.total} coin information, 
      time: ${new Date().toLocaleString()}
    `);
            let offset = 100;
            while (result.data.coins.length < result.data.stats.total) {
                console.log(`made a new call. ${new Date().toLocaleString()}`);
                // eslint-disable-next-line no-await-in-loop
                const callAPIAgain = yield request(`&offset=${offset}`);
                // If there is an error with the query but some coins have been fetched
                if (callAPIAgain.status !== 200 && result.data.coins.length > 0) {
                    break;
                }
                result = Object.assign(Object.assign({}, result), { data: Object.assign(Object.assign({}, result.data), { coins: [...result.data.coins, ...callAPIAgain.data.data.coins] }) });
                offset += 100;
            }
            const now = new Date().toLocaleString();
            console.log(`
      Done querying resource ${result.data.stats.total} of ${result.data.coins.length}, 
      writing to file..
      started: ${now}
    `);
            result.data.stats.updatedAt = now;
            saveNewFile(result);
        }
    });
}
exports.default = fetchCoins;
