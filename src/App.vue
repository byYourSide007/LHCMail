<template>
  <div id="app">
    <router-view></router-view>
    <main-tab-bar></main-tab-bar>
  </div>
</template>
<script>
  import MainTabBar from "@/components/content/mainTabbar/MainTabBar";

  export default {
    name : 'App',
    components : {
      MainTabBar,
    },
    data(){
      return {

      }
    },
  }
</script>
<style>
  @import "assets/css/base.css";
  @import "~normalize.css";
#app {

}

</style>
