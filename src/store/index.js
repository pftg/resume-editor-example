import Vue from "vue";
import Vuex from "vuex";

import api from "@/api/hireclub-client";

Vue.use(Vuex);

export const mutations = {
  updateResume(state, attrs) {
    state.resume = { ...state.resume, ...attrs };
  },

  addJob(state, job) {
    state.resume.jobs.push(job);
  },
  // TODO: We need to find best way to pass such stuff. There is 2 options like this or like above
  editJob(state, { job, ...attrs }) {
    // state.resume.job = { ...job, ...attrs };
    // instead of assigment new value to job, we change only some attrs
    // we have everything predefined, this is not new attrs
    Object.assign(job, attrs);
  },

  removeJob(state, job) {
    state.resume.jobs.splice(state.resume.jobs.indexOf(job), 1);
  },

  editHighlight(state, { highlight, text = highlight.text }) {
    highlight.text = text;
  },

  addHighlight(state, { job, highlight }) {
    job.highlights.push(highlight);
  },

  removeHighlight(state, { job, highlight }) {
    job.highlights.splice(job.highlights.indexOf(highlight), 1);
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
        jobs: [],
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
      commit("editJob", attrs);
    },

    addJob({ commit }) {
      commit("addJob", {
        title: "",
        company: "",
        startDate: "",
        endDate: "",
        highlights: []
      });
    },

    removeJob({ commit }, job) {
      commit("removeJob", job);
    },

    editHighlight({ commit }, { highlight, value }) {
      commit("editHighlight", { highlight, text: value });
    },

    addHighlight({ commit }, { job, ...highlight }) {
      commit("addHighlight", { job, highlight });
    },

    removeHighlight({ commit }, { job, highlight }) {
      commit("removeHighlight", { job, highlight });
    }
  }
});
