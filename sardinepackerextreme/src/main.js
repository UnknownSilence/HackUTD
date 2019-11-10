import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import Booking from "./components/Booking";
import Agent from "./components/Agent";
import Home from "./components/Home";
import Status from "./components/Status";
import RawAmadeus from "./components/RawAmadeus"
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  { path: '/', component: Home },
  { path: '/booking', component: Booking },
  { path: '/agentPanel', component: Agent },
  { path: '/status', component: Status },
  { path: '/RawAmadeus', component: RawAmadeus }
];

const router = new VueRouter({
  routes: routes
})

Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
