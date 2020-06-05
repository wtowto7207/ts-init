import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    refreshA: true //标记是否刷新页面A
  },
  mutations: {
    setRefreshA(state, flag) {
      state.refreshA = flag;
    }
  },
  actions: {},
  modules: {}
});
