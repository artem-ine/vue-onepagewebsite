import Vue from 'vue'
import App from './App'
import PrismicVue from '@prismicio/vue'

const endpoint = 'https://vue-onepagewebsite.cdn.prismic.io/api/v2'

const routes = [
  {
    type: 'home',
    path: '/'
  }, 
  {
    type: 'article',
    path: '/article/:uid',
  }
]

Vue.use(PrismicVue, {
  endpoint,
  apiOptions: { routes },
})

new Vue({
  render: (h) => h(App)
}).$mount('#app')