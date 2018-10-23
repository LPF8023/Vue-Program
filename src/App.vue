<template>
  <div id="app">
    <router-view></router-view>
    <FooterGuide v-if="$route.meta.isInterlayer"/>
  </div>
</template>

<script>
  import Vue from 'vue'
  import FooterGuide from './components/FooterGuide/FooterGuide'

export default {

  components: {
    FooterGuide,
  },

}
</script>

<style>

</style>
