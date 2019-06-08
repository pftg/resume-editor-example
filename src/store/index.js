import Vue from "vue";
import Vuex from "vuex";

import api from "@/api/hireclub-client";

Vue.use(Vuex);

export const mutations = {
  updateResume(state, attrs) {
    state.resume = { ...state.resume, ...attrs };
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
  actions: {
    fetchResume({ commit }) {
      api.getResume(resume => {
        commit("updateResume", resume);
      });
    },

    updateResume({ state, commit }, resume) {
      const savedResume = state.resume;
      commit("updateResume", resume);

      api.updateResume(resume)
        .then(() => console.log("success in resume update"))
        .catch((errorMessage) => {
          console.error(errorMessage);
          console.error("Reverting resume to previous version");
          commit("updateResume", savedResume);
        });
    }
  }
});
