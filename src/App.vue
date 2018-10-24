<template>
  <div id="app">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
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
