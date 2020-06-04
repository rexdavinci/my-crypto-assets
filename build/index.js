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
/* eslint-disable no-new */
const http_1 = __importDefault(require("http"));
const express_1 = __importDefault(require("express"));
const cronJob_1 = __importDefault(require("./cronJob"));
const redis_1 = require("./redis");
cronJob_1.default.start();
const app = express_1.default();
app.use(express_1.default.static('dist'));
app.use('/api/data', (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // res.header('Access-Control-Allow-Origin', 'http://localhost:8080');
    const data = yield redis_1.getAsync('assets');
    return res.status(200).json({ assets: JSON.parse(data) });
}));
http_1.default.createServer(app).listen(process.env.PORT, () => {
    console.log(`Listening on port ${process.env.PORT}`);
});
