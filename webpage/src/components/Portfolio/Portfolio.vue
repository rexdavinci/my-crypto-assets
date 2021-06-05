<template>
  <v-card  max-width="1380" class="mx-auto">
    <v-alert
      prominent
      text
      v-if="deleting"
      type="warning"
      icon="mdi-fire"
    >
        Are you sure you want to delete this record of
        {{ toDelete.quantity }} of <strong>{{ toDelete.name }}
          </strong> bought at <strong>{{ toDelete.boughtAt }}</strong>?
      <v-spacer> </v-spacer>
      <v-btn @click="confirmDelete(toDelete)" class="green mr-5 ml-5">confirm</v-btn>
      <v-btn @click="cancelDelete()" class="warning">Cancel</v-btn>
    </v-alert>

    <v-alert
      prominent
      text
      v-if="nuking"
      type="error"
      icon="mdi-nuke"
    >
        This will erase all your currenctly saved records. Proceed?
      <v-spacer> </v-spacer>
      <v-btn @click="confirmDelete(toDelete)" class="green mr-5 ml-5">confirm</v-btn>
      <v-btn @click="cancelDelete()" class="warning">Cancel</v-btn>
    </v-alert>

    <v-alert
      prominent
      text
      v-if="deleted"
      type="success"
    >
      The record has been deleted
      <v-spacer> </v-spacer>
    </v-alert>

    <v-alert
      prominent
      text
      v-if="nuked"
      type="success"
    >
      What record ? :)
      <v-spacer> </v-spacer>
    </v-alert>

    <v-data-table
    :headers="headers"
    :items="myCryptoAssets"
    :page.sync="page"
    :items-per-page="itemsPerPage"
    @page-count="pageCount = $event"
    hide-default-footer
    sort-by="worth"
    class="elevation-1"
  >

    <template v-slot:top>
      <v-toolbar flat color="white">
        <v-toolbar-title>My ASSETS</v-toolbar-title>
        <v-divider
          class="green darken-3 mx-4"
          inset
          vertical
        ></v-divider>
        <v-spacer></v-spacer>
        <v-toolbar elevation="0">
          <span class="mr-3">Net Worth:</span>
            <strong>$</strong>
              <span class="ml-2"> {{ netWorth }}</span>

          <v-divider
            class="mx-4"
            inset
            vertical
        ></v-divider>

          <span>
              {{ netWorthSatoshis }}
          </span><v-icon darken class="ml-3">mdi-bitcoin</v-icon></v-toolbar>
        <v-spacer></v-spacer>
        <v-dialog v-model="dialog" max-width="500px">
          <template v-slot:activator="{ on }">
            <v-btn dark
                small
                absolute
                right
                class="primary"
                fab v-on="on">
              <v-icon>mdi-plus</v-icon>
            </v-btn>
          </template>
          <v-card>
            <v-card-title>
              <span class="headline">{{ formTitle }}</span>
            </v-card-title>

            <v-card-text>
              <v-container>
                <v-row>
                  <v-col cols="12" sm="6" md="4">
                    <v-combobox
                      v-model="assetEdit.name"
                      :items="coinSymbols"
                      label="Asset name"
                    ></v-combobox>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="assetEdit.quantity" type="number"
                      step="0.0000001" label="Asset Quantity">
                    </v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field
                      type="number"
                      step="0.0000001"
                      v-model="assetEdit.boughtAt"
                      label="Bougth (sats per 1)">
                    </v-text-field>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="close">Cancel</v-btn>
              <v-btn color="blue darken-1" text @click="save">Add</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-toolbar>
    </template>

    <!-- Slot definitions -->
    <template v-slot:item.actions="{ item }">
      <v-icon
        small
        class="mr-2"
        @click="editItem(item)"
      >
        mdi-pencil
      </v-icon>
      <v-icon
        small
        @click="deleteItem(item)"
      >
        mdi-delete
      </v-icon>
    </template>
    <template v-slot:no-data>
      <v-btn color="primary" @click="restoreAssets">
        <v-icon class="mr-1">mdi-restore</v-icon>
        Restore
      </v-btn>
    </template>

    <template v-slot:item.name="{ item }">
      <div id="asset-profile">
        <span class="asset">
          <a :href="getProperty(item.name, 'link')" target="_blank" class="asset-link">
          <span class="asset-rank">
            {{item.name}}
          </span>
          <span class="asset-logo">
            <img :src="getProperty(item.name, 'icon')" alt="icon" width="35" height="30"/>
          </span>
          </a>
        </span>
      </div>
    </template>

    <template v-slot:item.price="{ item }">
      $ {{ getProperty(item.name, 'price') }} | {{ getProperty(item.name, 'satoshi')}}
    </template>

    <template v-slot:item.change="{ item }">
      <v-chip :color="getColor(item.change)" dark>{{ getProperty(item.name, 'change') }}</v-chip>
    </template>

    <template v-slot:item.worth="{ item }">
      $ <strong>{{ getWorth(getProperty(item.name, 'rawPrice'), item.quantity) }} |
      {{ getWorth(getProperty(item.name, 'satoshi'), item.quantity, 'satoshi') }}
      </strong> <v-icon>mdi-bitcoin</v-icon>
    </template>
  </v-data-table>

      <div class="text-center pt-2">
      <v-pagination v-model="page" :length="pageCount"></v-pagination>
      <v-text-field
        class="items-per-page"
        :value="itemsPerPage"
        label="Items per page"
        type="number"
        min="-1"
        max="15"
        @input="itemsPerPage = parseInt($event, 10)"
      ></v-text-field>
    </div>

    <div v-if="nukable">
      <v-tooltip top>
        <template v-slot:activator="{ on }">
          <v-btn dark
          small
          class="ml-3 mb-3 red darken-2"
          v-on="on"
          @click="nuke">
          <v-icon>mdi-nuke</v-icon>
          </v-btn>
          </template>
        <span>Erase all records</span>
      </v-tooltip>
    </div>

  </v-card>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapGetters } from 'vuex';
import genId from 'crypto-random-string';

type Item = {
  id: string;
  name: string;
  added: string;
  currentPrice: number;
  quantity: number;
  boughtAt: number;
};

export default Vue.extend({
  name: 'Portfolio',
  data: () => ({
    dialog: false,
    deleteThis: '',
    headers: [
      {
        text: 'ASSETS',
        align: 'start',
        value: 'name',
      },
      {
        text: 'ADDED',
        value: 'added',
      },
      {
        text: 'QUANTITY',
        value: 'quantity',
      },
      {
        text: 'WORTH ($ | sats)',
        value: 'worth',
      },
      {
        text: 'BOUGHT (BTC sats / unit)',
        value: 'boughtAt',
      },
      {
        text: 'PRICE ($ | sats)',
        value: 'price',
      },
      {
        text: '24HR %',
        value: 'change',
      },
      { text: 'Actions', value: 'actions', sortable: false },
    ],
    myCryptoAssets: [] as Item[],
    editing: false,
    assetEdit: {
      id: '',
      name: '',
      added: '',
      currentPrice: 0,
      quantity: 0,
      boughtAt: 0,
    } as Item,
    defaultItem: {
      id: '',
      name: '',
      added: '',
      currentPrice: 0,
      quantity: 0,
      boughtAt: 0,
    } as Item,
    toDelete: {} as Item,
    deleting: false,
    deleted: false,
    nuking: false,
    nuked: false,
    nukable: false,
    page: 1,
    pageCount: 0,
    itemsPerPage: 10,
    netWorth: 0 as number | string,
    netWorthSatoshis: 0 as number | string,
  }),
  computed: {
    ...mapGetters(['coins']),
    formTitle() {
      return !this.editing ? 'New Asset' : 'Edit Asset';
    },
    coinSymbols() {
      return this.coins.map((c: {symbol: string}) => c.symbol);
    },
  },
  methods: {
    getWorth(price: number, quantity: number, satoshi?: 'satoshi') {
      const worth = price * quantity;
      if (satoshi) {
        return worth.toFixed(8);
      }
      return Number(Number(worth)).toLocaleString();
    },
    getColor(change: number) {
      if (change < 0) return 'red';
      if (change > 0) return 'green';
      return 'orange';
    },
    getProperty(name: string, property: string) {
      const item = this.coins.find((c: { symbol: string }) => c.symbol === name);
      const btc = this.coins.find((c: {symbol: string}) => c.symbol === 'BTC');
      switch (property) {
        case 'link':
          return `https://coinranking.com/coin/${item.uuid}+${item.slug}`;
        case 'icon':
          return item.iconUrl;
        case 'price':
          return this.getDollarPrice(item.price);
        case 'rawPrice':
          return item.price;
        case 'change':
          return item.change;
        case 'satoshi':
          return this.getSatoshisPrice(item.price, btc.price);
        default:
          return '';
      }
    },
    restoreAssets() {
      const mySavedCoins = window.localStorage.getItem('myCryptoAssets');
      if (mySavedCoins) {
        const mySavedAssets = JSON.parse(mySavedCoins);
        this.myCryptoAssets = mySavedAssets;
      }
    },
    close() {
      this.dialog = false;
      this.$nextTick(() => {
        this.assetEdit = { ...this.defaultItem };
        this.editing = false;
      });
    },
    deleteItem(item: Item) {
      this.deleted = false;
      this.toDelete = { ...item };
      this.deleting = true;
    },
    nuke() {
      this.nuking = true;
    },
    confirmDelete() {
      if (this.nuking) {
        this.myCryptoAssets = [];
        window.localStorage.clear();
        this.nuking = false;
        this.nuked = true;
      } else {
        const updatedAsset = this.myCryptoAssets.filter(
          (a: { id: string }) => a.id !== this.toDelete.id,
        );
        this.myCryptoAssets = updatedAsset;
        // Update Local Storage
        window.localStorage.setItem('myCryptoAssets', JSON.stringify(updatedAsset));
        this.deleting = false;
        this.deleted = true;
      }
      // Remove from render
      setTimeout(() => {
        this.deleted = false;
        this.nuked = false;
      }, 3000);
    },
    cancelDelete() {
      this.deleting = false;
      this.nuking = false;
    },
    editItem(item: Item) {
      const asset = this.myCryptoAssets.find((c: {id: string}) => c.id === item.id);
      this.assetEdit = { ...asset } as Item;
      this.editing = true;
      this.dialog = true;
    },
    generateUniqueId() {
      return genId({ length: 10, type: 'base64' });
    },
    save() {
      // update render and save to Local Storage
      if (this.assetEdit.name) {
        if (this.editing) {
          const updatedAssets = this.myCryptoAssets.map(
            (a: Item) => (a.id !== this.assetEdit.id ? a : this.assetEdit),
          );
          this.myCryptoAssets = updatedAssets;
          window.localStorage.setItem('myCryptoAssets', JSON.stringify(updatedAssets));
          this.editing = false;
        } else {
          const newAsset = {
            ...this.assetEdit,
            id: this.generateUniqueId(),
            added: new Date().toLocaleString(),
          };
          this.myCryptoAssets = [...this.myCryptoAssets, newAsset];
          window.localStorage.setItem('myCryptoAssets',
            JSON.stringify(this.myCryptoAssets));
        }
      }
      this.close();
    },
    getAssetCurrentPrice(name: string, satoshi?: 'satoshi'): number {
      if (!satoshi) {
        const { price } = this.coins.find(
          (c: { symbol: string; price: string }): boolean => c.symbol === name,
        );
        return Number(price);
      }
      return 0;
    },
    getDollarPrice(price: number) {
      return Number(Number(price).toLocaleString());
    },
    getSatoshisPrice(price: number, btcPrice: number) {
      return Number((price * (1 / btcPrice)).toFixed(8));
    },
    sumReducer(item: number[]) {
      return item.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    },
  },
  watch: {
    myCryptoAssets() {
      if (this.myCryptoAssets.length > 0) {
        const btc = this.coins.find((c: {symbol: string}) => c.symbol === 'BTC');
        const allCurrentPrices = this.myCryptoAssets.map(
          (a: Item): { dollars?: number; satoshis?: number } => {
            const currentWorth: { dollars?: number; satoshis?: number } = {};
            currentWorth.dollars = this.getAssetCurrentPrice(a.name) * a.quantity;
            currentWorth.satoshis = this.getSatoshisPrice(currentWorth.dollars, btc.price);
            return currentWorth;
          },
        );
        const dollars = allCurrentPrices.map((p) => p.dollars) as number[];
        const satoshis = allCurrentPrices.map((p) => p.satoshis) as number[];
        this.netWorth = this.sumReducer(dollars).toLocaleString();
        this.netWorthSatoshis = this.sumReducer(satoshis).toFixed(8);
        this.nukable = true;
      } else {
        this.nukable = false;
        this.netWorth = 0;
        this.netWorthSatoshis = 0;
      }
    },
    displayNetWorth() {
      return this.netWorth;
    },
    dialog(val: boolean): boolean | void {
      return val || this.close();
    },
    deleteThis(item: Item) {
      return item.name;
    },
  },
});
</script>
<style lang="scss" scoped>
  .items-per-page {
    width: 15%;
    margin: 2em auto;
  }
</style>
