import Vue from 'vue';
import Vuex from 'vuex';

import requestDataFromAPI from './service';
import State from './interfaces';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    coins: [],
    globalInfo: null,
    base: null,
  },
  getters: {
    coins: (state: State) => state.coins,
    globalInformation: (state: State) => state.globalInfo,
  },
  mutations: {
    COINS_RANKING: (state: State, data) => {
      const { assets } = data;
      const JsonAssets = JSON.parse(assets);
      state.coins = JsonAssets.data.coins;
      state.globalInfo = JsonAssets.data.stats;
      state.base = JsonAssets.data.base;
    },
  },
  actions: {
    async fetchCoinRanking({ commit }) {
      const allData = await requestDataFromAPI();
      commit('COINS_RANKING', allData.data);
    },
  },
  modules: {},
});
