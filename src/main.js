import Vue from 'vue'
import App from './App';
import _ from 'lodash';
import VueMaterial from 'vue-material'
import VueRouter from 'vue-router'
import 'vue-material/dist/vue-material.css'
import Start from './components/Start.vue'
import Play from './components/Play.vue'
import Style from './assets/css/app.css';
Vue.use(VueMaterial)
Vue.use(VueRouter)

Vue.material.registerTheme('default', {
	primary: {
	  color: 'brown',
	  hue: 900,
	  textColor: 'white'
	},
	accent: {
	  color: 'green',
	  hue: 900,
	  textColor: 'white'
	},
	warn: {
	  color: 'red',
	  hue: 900,
	  textColor: 'white'
	},
})

const routes = [
  { path: '/', redirect: '/start' },
  { path: '/start', component: Start },
  { path: '/play', component: Play }
]
const router = new VueRouter({
  routes
})
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})