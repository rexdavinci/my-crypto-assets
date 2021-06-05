<template>
  <v-card  max-width="1380" class="mx-auto">
    <v-card-title>
      Assets
      <v-spacer></v-spacer>
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Search"
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>

    <v-data-table
      :fixed-header="fixedHeader"
      item-key="rank"
      :headers="headers"
      :items="coins"
      :search="search"
      :sort-desc.sync="sortDesc"
      :items-per-page="itemsPerPage"
      :page.sync="page"
      :loading="loading"
      :loading-text="loadingText"
      hide-default-footer
      @page-count="pageCount = $event"
      class="elevation-1 coin-list"
    >

    <template v-slot:item.rank="{ item }">
      <div id="coin-profile">
        <span class="cryptocurrency">
          <a :href="getLink(item)" target="_blank" class="coin-link">
          <span class="coin-rank">
            {{item.rank}}
          </span>
          <span class="coin-logo">
            <img :src="item.iconUrl" alt="icon" width="35" height="30"/>
          </span>
          </a>
        </span>
      </div>
    </template>


    <template v-slot:item.change="{ item }">
      <v-chip :color="getColor(item.change)" dark>{{ item.change }}</v-chip>
    </template>

    <template v-slot:item.name="{ item }">
      <div class="coin-name">{{ item.name }}</div>
    </template>

    <template v-slot:item.marketCap="{ item }">
      {{ toFixed(item.marketCap) }}
    </template>

    <template v-slot:item.price="{ item }">
      {{ toFixed(item.price) }}
    </template>
    </v-data-table>

    <!-- <div class="text-center pt-2">
      <v-pagination v-model="page" :length="pageCount"></v-pagination>
      <v-text-field
        class="items-per-page"
        value="10"
        label="Items per page"
        type="number"
        min="-1"
        max="15"
        @input="itemsPerPage = parseInt($event, 10)"
      ></v-text-field>
    </div> -->
  </v-card>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapGetters } from 'vuex';

export default Vue.extend({
  name: 'Coins',
  computed: {
    ...mapGetters(['coins']),
  },
  data: () => ({
    sortBy: 'rank',
    itemsPerPage: 20,
    fixedHeader: true,
    page: 1,
    pageCount: 0,
    sortDesc: false,
    loading: true,
    search: '',
    loadingText: 'Fetching Cryptocurrency Assets... please wait!',
    headers: [
      {
        text: 'RANK',
        align: 'start',
        value: 'rank',
      },
      {
        text: 'NAME',
        value: 'name',
      },
      {
        text: 'SYMBOL',
        value: 'symbol',
      },
      {
        text: 'MARKET CAP',
        value: 'marketCap',
      },
      {
        text: 'PRICE',
        value: 'price',
      },
      {
        text: '24HR',
        value: 'change',
      },
    ],
  }),
  methods: {
    toggleOrder() {
      this.sortDesc = !this.sortDesc;
    },
    toFixed(price: string): string {
      const result = parseFloat(parseFloat(price).toFixed(2)).toLocaleString();
      return `$ ${result}`;
    },
    getLink(item: { uuid: string; slug: string }) {
      return `https://coinranking.com/coin/${item.uuid}+${item.slug}`;
    },
    getColor(change: number) {
      if (change < 0) return 'red';
      if (change > 0) return 'green';
      return 'orange';
    },
  },
  watch: {
    coins() {
      if (this.coins.length > 0) {
        this.loading = false;
      }
    },
  },
});
</script>

<style lang="scss" scoped>
  $breakpoint-phone: 640px;
  $breakpoint-tablet: 768px;
  $breakpoint-desktop: 1024px;

  #coin-profile {
    .coin-link {
      .coin-symbol, .coin-rank {
        padding-bottom: 2px;
      }
      .coin-rank {
        margin-right: 1em;
      }

      .coin-symbol, &:visited{
        color: #008000;

        &:active {
          color: #5adf5a;
        }

        &:hover {
          color: #32a432;
        }
      }
      .coin-logo {
        margin-top: 1em;
      }
      text-decoration: none;
      color: rgb(64, 60, 60);
      font-weight: bolder;
    }

  }
  .items-per-page{
    width: 15%;
    margin: 2em auto;
  }
</style>
