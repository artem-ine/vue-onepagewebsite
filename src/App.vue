<template>
  <div id="app">
    <HomeTest />
  </div>
</template>

<script>
import HomeTest from './components/HomeTest.vue'

export default {
  name: 'App',
  components: {
    HomeTest
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
