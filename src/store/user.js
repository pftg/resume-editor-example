import api from "@/api/hireclub-client.js";

export const namespaced = true;

export const state = {
  name: ""
};

export const getters = {
  name: state => state.name
};

export const mutations = {
  setName(state, name) {
    state.name = name;
  }
};

export const actions = {
  fetch({ commit }) {
    return api.getCurrentUserDetails().then(user => {
      commit("setName", user);
    });
  }
};
