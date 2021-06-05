<template>
<v-footer
    dark
    padless
  >
    <v-card
      class="flex"
      flat
      tile
    >
      <v-card-title class="primary lighten-1">

        <v-spacer></v-spacer>

        <v-btn
          v-for="(icon, index) in icons"
          :key="index"
          class="mx-4"
          dark
          icon
        >
        <a class="white--text links" :href="icon.url" target="_blank">
          <v-icon size="24px">{{ icon.icon }}</v-icon>
        </a>
        </v-btn>
      </v-card-title>

      <v-card-text class="py-2 white--text text-center darken-3">
        Made by <strong><a class="green--text darken-4 footer-link" href="https://www.twitter.com/abdhafizahmed" target="_blank">Abdulhafiz Ahmed</a></strong>
        <pre></pre>Data provided by <strong><a class="blue--text footer-link" href="https://www.coinranking.com" target="_blank">Coinranking</a></strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Footer',
  data: () => ({
    icons: [
      { icon: 'mdi-twitter', url: 'https://www.twitter.com/abdhafizahmed' },
      { icon: 'mdi-linkedin', url: 'https://www.linkedin.com/in/abdulhafiz-ahmed' },
      { icon: 'mdi-github', url: 'https://www.github.com/rexdavinci' },
    ],
  }),
});
</script>
<style lang="scss">
  .links {
    &:active, &:visited, &:clicked {
    color: white;
    }
    text-decoration: none;
  }
  .footer-link {
    text-decoration: none;
  }
</style>
