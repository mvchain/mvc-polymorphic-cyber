// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import store from './store';
import * as filters from './filters'; // 全局filter
import ElementUI from 'element-ui';
import './permission'; // 权限
import 'element-ui/lib/theme-chalk/index.css';
import Web3 from 'web3';
Vue.config.productionTip = false;
Vue.use(ElementUI);
if (typeof window.web3 !== 'undefined') {
  window.web3 = new Web3(window.web3.currentProvider);
} else {
  window.web3 = new Web3(new Web3.providers.HttpProvider('http://192.168.206.222:8545'));
}
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key]);
});
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: {App}
});
