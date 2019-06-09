import Vue from "vue";
import Vuex from "vuex";

import api from "@/api/hireclub-client";

Vue.use(Vuex);

export const mutations = {
  updateResume(state, attrs) {
    state.resume = { ...state.resume, ...attrs };
  },

  // TODO: We need to find best way to pass such stuff. There is 2 options like this or like above
  editJob(state, { job, ...attrs }) {
    // state.resume.job = { ...job, ...attrs };
    // instead of assigment new value to job, we change only some attrs
    // we have everything predefined, this is not new attrs
    Object.assign(job, attrs);
  },
  editHighlight(state, { highlight, text = highlight.text }) {
    highlight.text = text;
  },
  addHighlight(state, highlight) {
    state.resume.job.highlights.push(highlight);
  },
  removeHighlight(state, highlight) {
    state.resume.job.highlights.splice(
      state.resume.job.highlights.indexOf(highlight),
      1
    );
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
    resume: {
      ...{
        firstName: "",
        lastName: "",
        subtitle: "",
        email: "",
        job: {
          title: "",
          company: "",
          startDate: "",
          endDate: "",
          highlights: [{ text: "Highlight 1" }, { text: "Highlight 2" }]
        }
      },
      ...JSON.parse(window.localStorage.getItem(STORAGE_KEY) || "{}")
    }
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

      api
        .updateResume(resume)
        .then(() => console.log("success in resume update"))
        .catch(errorMessage => {
          console.error(errorMessage);
          console.error("Reverting resume to previous version");
          commit("updateResume", savedResume);
        });
    },

    editJob({ commit }, attrs) {
      console.log(attrs.job.title);
      console.log(attrs.title);
      commit("editJob", attrs);
    },

    editHighlight({ commit }, { highlight, value }) {
      commit("editHighlight", { highlight, text: value });
    },

    addHighlight({ commit }, text) {
      commit("addHighlight", { text });
    },

    removeHighlight({ commit }, highlight) {
      commit("removeHighlight", highlight);
    }
  }
});
