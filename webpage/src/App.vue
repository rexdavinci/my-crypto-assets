<template>
  <v-app>
    <v-system-bar>
    </v-system-bar>
    <v-app-bar app>
      <Navbar />
    </v-app-bar>
    <v-content>
      <v-card max-width="330" class="mx-auto pl-3" v-if="!loading">
        <p class="medium"><span class="brown--text">Last Updated: </span>
          {{ lastUpdated }}</p> <v-spacer></v-spacer>
        <p><span class="brown--text">24Hr Volume:</span>
        $ {{ volume24hr || 'loading...' }} <v-spacer></v-spacer></p>
        <p><span class="brown--text">Market Cap:</span>
          $ <span class="green--text">{{ marketCap || 'loading...' }}</span>
        <v-spacer></v-spacer></p>
      </v-card>
      <v-container fluid>
        <router-view/>
      </v-container>
    </v-content>
    <v-bottom-navigation>
    </v-bottom-navigation>
    <Footer />
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapGetters } from 'vuex';
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';

export default Vue.extend({
  name: 'App',
  components: {
    Navbar,
    Footer,
  },
  data: () => ({
    loading: true,
  }),
  mounted() {
    this.$store.dispatch('fetchCoinRanking');
  },
  computed: {
    ...mapGetters(['globalInformation']),
    volume24hr() {
      if (this.globalInformation) {
        const volume24hr: number = this.globalInformation.total24hVolume;
        return Number(Number(volume24hr).toFixed(2)).toLocaleString();
      }
      return this.loading;
    },
    marketCap() {
      if (this.globalInformation) {
        const marketCap: number = this.globalInformation.totalMarketCap;
        return Number(Number(marketCap).toFixed(2)).toLocaleString();
      }
      return this.loading;
    },
    lastUpdated() {
      if (this.globalInformation) {
        const lastPulse = new Date(this.globalInformation.updatedAt);
        return lastPulse.toLocaleString();
      }
      return this.loading;
    },
  },
  watch: {
    globalInformation() {
      if (this.globalInformation) {
        this.loading = false;
      }
    },
  },
});
</script>
