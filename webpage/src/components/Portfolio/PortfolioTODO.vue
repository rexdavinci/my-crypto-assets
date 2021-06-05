<template>
  <v-card  max-width="1380" class="mx-auto">
    <alert-template
      :deleting="deleting"
      :toDelete="toDelete"
      :nuking="nuking"
      :deleted="deleted"
      :nuked="nuked"
      content-tag="portfolio-alerts"
    />

    <data-table-template
      :headers="headers"
      :myCryptoAssets="myCryptoAssets"
      :page="page"
      :itemsPerPage="itemsPerPage"
      :pageCount="pageCount"
      :netWorth="netWorth"
      :netWorthSatoshis="netWorthSatoshis"
      :dialog="dialog"
      :formTitle="formTitle"
      :assetEdit="assetEdit"
      :coinSymbols="coinSymbols"
      :close="close"
      :save="save"
      :editItem="editItem"
      :deleteItem="deleteItem"
      :restoreAssets="restoreAssets"
      :getProperty="getProperty"
      :getWorth="getWorth"
      content-tag="portfolio-data-table"
    />

    <page-nav-template
      :itemsPerPage="itemsPerPage"
      :page="page"
      :pageCount="pageCount"
    />

    <nuke-component
      :nuke="nuke"
      :nukable="nukable"
    />

  </v-card>
</template>

<script lang="ts">
// import Vue from 'vue';
// import { mapGetters } from 'vuex';
// import genId from 'crypto-random-string';
// import PortfolioAlert from './Alerts.vue';
// // import DataTable from './DataTable.vue';
// import PageNav from './PageNav.vue';
// import NukeComponent from './NukeComponent.vue';

// type Item = {
//   id: string;
//   name: string;
//   added: string;
//   currentPrice: number;
//   quantity: number;
//   boughtAt: number;
// };

// export default Vue.extend({
//   // name: 'Portfolio',
//   components: {
//     'alert-template': PortfolioAlert,
//     //   'data-table-template': DataTable,
//     'page-nav-template': PageNav,
//     'nuke-component': NukeComponent,
//   },
//   data: () => ({
//     dialog: false,
//     deleteThis: '',
//     headers: [
//       {
//         text: 'ASSETS',
//         align: 'start',
//         value: 'name',
//       },
//       {
//         text: 'ADDED',
//         value: 'added',
//       },
//       {
//         text: 'QUANTITY',
//         value: 'quantity',
//       },
//       {
//         text: 'WORTH ($ | sats)',
//         value: 'worth',
//       },
//       {
//         text: 'BOUGHT @ (BTC sats/1)',
//         value: 'boughtAt',
//       },
//       {
//         text: 'PRICE ($ | sats)',
//         value: 'price',
//       },
//       {
//         text: '24HR %',
//         value: 'change',
//       },
//       { text: 'Actions', value: 'actions', sortable: false },
//     ],
//     myCryptoAssets: [] as Item[],
//     editing: false,
//     assetEdit: {
//       id: '',
//       name: '',
//       added: '',
//       currentPrice: 0,
//       quantity: 0,
//       boughtAt: 0,
//     } as Item,
//     defaultItem: {
//       id: '',
//       name: '',
//       added: '',
//       currentPrice: 0,
//       quantity: 0,
//       boughtAt: 0,
//     } as Item,
//     toDelete: {} as Item,
//     deleting: false,
//     deleted: false,
//     nuking: false,
//     nuked: false,
//     nukable: false,
//     page: 1,
//     pageCount: 0,
//     itemsPerPage: 10,
//     netWorth: 0 as number | string,
//     netWorthSatoshis: 0 as number | string,
//   }),
//   computed: {
//     ...mapGetters(['coins']),
//     formTitle() {
//       return !this.editing ? 'New Asset' : 'Edit Asset';
//     },
//     coinSymbols() {
//       return this.coins.map((c: {symbol: string}) => c.symbol);
//     },
//   },
//   created() {
//     this.$store.dispatch('fetchCoinRanking');
//   },
//   methods: {
//     getWorth(price: number, quantity: number, satoshi: 'satoshi' | undefined) {
//       const worth = price * quantity;
//       if (satoshi) {
//         return worth.toFixed(8);
//       }
//       return Number(Number(worth).toFixed(2)).toLocaleString();
//     },
//     getColor(change: number) {
//       if (change < 0) return 'red';
//       if (change > 0) return 'green';
//       return 'orange';
//     },
//     getProperty(name: string, property: string) {
//       const item = this.coins.find((c: { symbol: string }) => c.symbol === name);
//       const btc = this.coins.find((c: {symbol: string}) => c.symbol === 'BTC');
//       switch (property) {
//         case 'link':
//           return `https://coinranking.com/coin/${item.uuid}+${item.slug}`;
//         case 'icon':
//           return item.iconUrl;
//         case 'price':
//           return this.getDollarPrice(item.price);
//         case 'rawPrice':
//           return item.price;
//         case 'change':
//           return item.change;
//         case 'satoshi':
//           return this.getSatoshisPrice(item.price, btc.price);
//         default:
//           return '';
//       }
//     },
//     restoreAssets() {
//       const mySavedCoins = window.localStorage.getItem('myCryptoAssets');
//       if (mySavedCoins) {
//         const mySavedAssets = JSON.parse(mySavedCoins);
//         this.myCryptoAssets = mySavedAssets;
//       }
//     },
//     close() {
//       this.dialog = false;
//       this.$nextTick(() => {
//         this.assetEdit = { ...this.defaultItem };
//         this.editing = false;
//       });
//     },
//     deleteItem(item: Item) {
//       this.deleted = false;
//       this.toDelete = { ...item };
//       this.deleting = true;
//     },
//     nuke() {
//       this.nuking = true;
//     },
//     confirmDelete() {
//       if (this.nuking) {
//         this.myCryptoAssets = [];
//         window.localStorage.clear();
//         this.nuking = false;
//         this.nuked = true;
//       } else {
//         const updatedAsset = this.myCryptoAssets.filter(
//           (a: { id: string }) => a.id !== this.toDelete.id,
//         );
//         this.myCryptoAssets = updatedAsset;
//         // Update Local Storage
//         window.localStorage.setItem('myCryptoAssets', JSON.stringify(updatedAsset));
//         this.deleting = false;
//         this.deleted = true;
//       }
//       // Remove from render
//       setTimeout(() => {
//         this.deleted = false;
//         this.nuked = false;
//       }, 3000);
//     },
//     cancelDelete() {
//       this.deleting = false;
//       this.nuking = false;
//     },
//     editItem(item: Item) {
//       const asset = this.myCryptoAssets.find((c: {id: string}) => c.id === item.id);
//       this.assetEdit = { ...asset } as Item;
//       this.editing = true;
//       this.dialog = true;
//     },
//     save() {
//       // update render and save to Local Storage
//       if (this.assetEdit.name) {
//         this.getCurrentPrice(this.assetEdit.name);
//         // console.log(this.coins.find((a: {name: string}) => a.name === this.assetEdit.name));
//         if (this.editing) {
//           const updatedAssets = this.myCryptoAssets.map(
//             (a: Item) => (a.id !== this.assetEdit.id ? a : this.assetEdit),
//           );
//           this.myCryptoAssets = updatedAssets;
//           window.localStorage.setItem('myCryptoAssets', JSON.stringify(updatedAssets));
//           this.editing = false;
//         } else {
//           const newAsset = {
//             ...this.assetEdit,
//             id: this.generateUniqueId(),
//             added: new Date().toLocaleString(),
//           };
//           this.myCryptoAssets = [...this.myCryptoAssets, newAsset];
//           window.localStorage.setItem('myCryptoAssets',
//             JSON.stringify(this.myCryptoAssets));
//         }
//       }
//       this.close();
//     },
//     generateUniqueId() {
//       return genId({ length: 10, type: 'base64' });
//     },
//     getCurrentPrice(assetName: string) {
//       const currentAssetDetail = this.coins.find(
//         (asset: {symbol: string}) => asset.symbol === assetName,
//       );
//       this.assetEdit.currentPrice = currentAssetDetail.price;
//     },
//     getDollarPrice(price: number) {
//       return Number(Number(price).toFixed(2).toLocaleString());
//     },
//     getSatoshisPrice(price: number, btcPrice: number) {
//       return Number((price * (1 / btcPrice)).toFixed(8));
//     },
//     sumReducer(item: number[]) {
//       return item.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
//     },
//     updateCurrentPrices() {
//       return this.myCryptoAssets.map((asset: Item) => {
//         console.log(asset);
//         return true;
//       });
//     },
//   },
//   watch: {
//     myCryptoAssets() {
//       if (this.myCryptoAssets.length > 0) {
//         const btc = this.coins.find((c: {symbol: string}) => c.symbol === 'BTC');
//         const allCurrentDollarPrices = this.myCryptoAssets.map(
//           (a: Item) => this.getDollarPrice(a.currentPrice) * a.quantity,
//         );
//         const allCurrentSatoshiPrices = this.myCryptoAssets.map(
//           (a: Item) => this.getSatoshisPrice(
//             Number(a.currentPrice * a.quantity),
//             Number(btc.price),
//           ),
//         );
//         this.netWorth = this.sumReducer(allCurrentDollarPrices).toLocaleString();
//         this.netWorthSatoshis = this.sumReducer(allCurrentSatoshiPrices).toFixed(8);
//         this.nukable = true;
//       } else {
//         this.nukable = false;
//         this.netWorth = 0;
//         this.netWorthSatoshis = 0;
//       }
//     },
//     coins() {
//       this.updateCurrentPrices();
//       // const newCryptoAssets: Item[] = [];
//       // this.myCryptoAssets.map((asset: Item) => this.myCryptoAssets.map(
//       //   (oldAsset: Item) => this.coins.find(
//       //     (newAsset: { symbol: string; price: number }) => {
//       //       if (newAsset.symbol === oldAsset.name) {
//       //         return newCryptoAssets.push({ ...oldAsset, currentPrice: newAsset.price });
//       //       }
//       //       return false;
//       //     },
//       //   ),
//       // ));
//     },
//     displayNetWorth() {
//       return this.netWorth;
//     },
//     dialog(val: boolean): boolean | void {
//       return val || this.close();
//     },
//     deleteThis(item: Item) {
//       return item.name;
//     },
// },
// });
</script>
<style lang="scss" scoped>
  .items-per-page {
    width: 15%;
    margin: 2em auto;
  }
</style>
