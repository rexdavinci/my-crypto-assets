"use strict";
// import {
//   RxDatabase,
//   RxCollection,
//   RxJsonSchema,
//   RxDocument,
//   createRxDatabase,
//   addRxPlugin,
// } from 'rxdb';
// import * as MemoryAdapter from 'pouchdb-adapter-memory';
// // import pouchdb from 'pouchdb-adapter-leveldb';
// import { RxDBServerPlugin } from 'rxdb/plugins/server';
// import { CoinRanking } from './interfaces';
// addRxPlugin(RxDBServerPlugin);
// addRxPlugin(MemoryAdapter);
// // randomBytes(32).toString('hex')
// interface MyAssetsDocType extends CoinRanking {
//   timestamp?: number;
// }
// type MyAssetsDocMethods = {
//   stats: () => object;
//   coins: () => object;
//   base: () => object | undefined;
// };
// type MyAssetsDocument = RxDocument<MyAssetsDocType, MyAssetsDocMethods>;
// type MyAssetsCollectionMethods = {
//   countDocuments: () => Promise<number>;
//   removeById: (id: number) => Promise<MyAssetsDocument[]>;
// };
// type MyAssetsCollection = RxCollection<
// MyAssetsDocType,
// MyAssetsDocMethods,
// MyAssetsCollectionMethods
// >;
// type MyCryptoAssetsCollections = {
//   assets: MyAssetsCollection;
// };
// type MyCryptoAssetsDB = RxDatabase<MyCryptoAssetsCollections>;
// const assetsSchema: RxJsonSchema<MyAssetsDocType> = {
//   title: 'data schema',
//   description: 'How the data object is designed',
//   version: 0,
//   keyCompression: true,
//   type: 'object',
//   properties: {
//     timestamp: {
//       type: 'integer',
//     },
//     data: {
//       type: 'object',
//     },
//   },
// };
// const myAssetsDocMethods: MyAssetsDocMethods = {
//   stats(this: MyAssetsDocument) {
//     return this.data.stats;
//   },
//   coins(this: MyAssetsDocument) {
//     return this.data.coins;
//   },
//   base(this: MyAssetsDocument) {
//     return this.data.base;
//   },
// };
// const myAssetsCollectionMethods: MyAssetsCollectionMethods = {
//   async countDocuments(this: MyAssetsCollection) {
//     const allDocs = await this.find().exec();
//     return allDocs.length;
//   },
//   async removeById(this: MyAssetsCollection, id: number) {
//     let allDocs = await this.find().exec();
//     allDocs = allDocs.filter((doc: MyAssetsDocument) => doc.timestamp !== id);
//     return allDocs;
//   },
// };
// const create = async (): Promise<MyCryptoAssetsDB> => {
//   const database: MyCryptoAssetsDB = await createRxDatabase<MyCryptoAssetsCollections>({
//     name: 'assetsdb',
//     adapter: 'memory',
//   });
//   await database.collection({
//     name: 'assets',
//     schema: assetsSchema,
//     methods: myAssetsDocMethods,
//     statics: myAssetsCollectionMethods,
//   });
//   return database;
// };
// let dbPromise: RxDatabase<MyCryptoAssetsCollections> | null = null;
// const Database = {
//   async getDB(): Promise<RxDatabase<MyCryptoAssetsCollections>> {
//     if (!dbPromise) dbPromise = await create();
//     return dbPromise;
//   },
//   async dbAPP(): Promise<unknown> {
//     const database = await this.getDB();
//     const { app } = database.server({
//       startServer: false,
//     });
//     return app;
//   },
//   async countDocuments(): Promise<number> {
//     const database = await this.getDB();
//     const count: number = await database.assets.countDocuments();
//     return count;
//   },
//   async addRecord(newAsset: MyAssetsDocType):
//   Promise<RxDocument<MyAssetsDocType, MyAssetsDocMethods>> {
//     const database: RxDatabase<MyCryptoAssetsCollections> = await this.getDB();
//     const asset: MyAssetsDocument = await database.assets.insert({
//       timestamp: Date.now(),
//       data: {
//         stats: newAsset.data.stats,
//         coins: newAsset.data.coins,
//       },
//     });
//     return asset;
//   },
// };
// export default Database;
