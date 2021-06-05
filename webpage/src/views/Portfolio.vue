<template>
  <div id="portfolio">
    <h2>Portfolio</h2>
    <Portfolio />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Portfolio from '@/components/Portfolio/Portfolio.vue';

export default Vue.extend({
  components: {
    Portfolio,
  },
});
</script>
