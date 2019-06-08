import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const mutations = {
  updateResume(state, attrs) {
    Object.assign(state.resume, attrs);
  }
};

export default new Vuex.Store({
  state: {
    resume: {
      firstName: "",
      lastName: "",
      subtitle: "",
      email: ""
    }
  },
  mutations,
  actions: {}
});
