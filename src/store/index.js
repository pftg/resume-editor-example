import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    resume: {
      firstName: "",
      lastName: "",
      subtitle: ""
    }
  },
  mutations: {
    updateResume(state, attrs) {
      Object.assign(state.resume, attrs);
    }
  },
  actions: {}
});
