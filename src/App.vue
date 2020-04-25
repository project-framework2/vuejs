<template>
  <div id="app">
    <custom-header></custom-header>
    
    <router-view></router-view>
  </div>
</template>

<script>
  import CustomHeader from "./components/Header"

export default {
  name: 'App',
  components: {CustomHeader}
}
</script>

<style>
  @import '../node_modules/bootstrap/dist/css/bootstrap.css';

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
