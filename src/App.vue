<template>
  <div id="app">
    <NavigationBar />
    <HomePage />
    <ArticlePage />
  </div>
</template>

<script>
import HomePage from './components/HomePage.vue'
import ArticlePage from './components/ArticlePage.vue'
import NavigationBar from './components/NavigationBar.vue'

export default {
  name: 'App',
  components: {
    NavigationBar,
    HomePage,
    ArticlePage
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
