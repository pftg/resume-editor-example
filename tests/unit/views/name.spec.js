import { createLocalVue, shallowMount } from "@vue/test-utils";
import Vuex from "vuex";
// NOTE: We do not need it to use for our tests. But because of warning we have to enable it
import router from "@/router";

import Name from "@/views/Name.vue";

const localVue = createLocalVue();
localVue.use(Vuex);
localVue.use(router);

describe("Name.vue", () => {
  let actions;
  let store;

  beforeEach(() => {
    actions = {
      updateResume: jest.fn()
    };

    store = new Vuex.Store({
      state: {
        resume: {
          firstName: "FirstName",
          lastName: "LastName"
        }
      },
      actions
    });
  });

  it("renders form with names from store", () => {
    const wrapper = shallowMount(Name, { store, localVue });

    const $firstName = wrapper.find("input#first-name");
    expect($firstName.element.value).toMatch("FirstName");
  });

  it("updates names on change", () => {
    const wrapper = shallowMount(Name, { store, localVue });

    const $firstName = wrapper.find("input#first-name");
    $firstName.element.value = "New First Name";
    $firstName.trigger("change");

    expect(actions.updateResume).toHaveBeenCalled();
  });
});
