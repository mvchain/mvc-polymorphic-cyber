import Vue from 'vue';
import Vuex from 'vuex';
import login from './modules/login';
import Home from './modules/Home';
import getters from './getters';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    login,
    Home
  },
  getters
});

export default store;
