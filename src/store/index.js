import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const mutations = {
  updateResume(state, attrs) {
    Object.assign(state.resume, attrs);
  }
};

export const STORAGE_KEY = "resume-editor-vuejs-example";

export const plugins = [
  store => {
    store.subscribe((mutation, { resume }) => {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(resume));
    });
  }
];

export default new Vuex.Store({
  state: {
    resume: JSON.parse(window.localStorage.getItem(STORAGE_KEY) || "{}")
  },
  plugins,
  mutations,
  actions: {}
});
