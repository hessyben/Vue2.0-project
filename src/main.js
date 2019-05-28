// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import iView from 'iview';
import VueSesource from 'vue-resource';
import store from './store';
import App from './App';
import router from './router';
import 'iview/dist/styles/iview.css';
import HttpService from '@/service/index.js';

Vue.config.productionTip = false;
Vue.use(iView);
Vue.use(VueSesource);

var golob = {
  user:'timanetwork',
  password:'tima'
}

// 开启debug模式
Vue.config.debug = true;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
