<template>
      <v-app-bar
        absolute
        color="white"
      >
        <v-spacer></v-spacer>
          <router-link to="/">Home</router-link>
          <router-link to="/portfolio">Portfolio</router-link>
          <!-- <router-link to="/orders">Orders</router-link>
          <router-link to="/exchanges">Exchanges</router-link> -->
        <v-btn
          href="https://github.com/rexdavinci/my-crypto-assets/issues"
          target="_blank"
          text
        >
          <small><span class="mr-2">V 0.1.9-alpha</span></small>
        </v-btn>
      </v-app-bar>

</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Navbar',
});
</script>

<style lang="scss" scoped>
$breakpoint-phone: 640px;
$breakpoint-tablet: 768px;
$breakpoint-desktop: 1024px;


  a {
    font-weight: bold;
    color: whitesmoke;

    font-size: 1em;
    text-decoration: none;
    margin: 0 0.5em;

    &.router-link-exact-active {
      color: green;
    }

    // @media screen and (min-width: $breakpoint-desktop) {
    //   font-size: 0.7em;
    //   border: 1px solid red;
    // }
  }
</style>
