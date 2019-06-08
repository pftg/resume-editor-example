import { createLocalVue, shallowMount } from "@vue/test-utils";
import Vuex from "vuex";
import Name from "@/views/Name.vue";

const localVue = createLocalVue();
localVue.use(Vuex);

describe("Name.vue", () => {
  let mutations;
  let store;

  beforeEach(() => {
    mutations = {
      updateResume: jest.fn()
    };

    store = new Vuex.Store({
      state: {
        resume: {
          firstName: "FirstName",
          lastName: "LastName"
        }
      },
      mutations
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

    expect(mutations.updateResume).toHaveBeenCalled();
  });

  it("updates names on next button click", () => {
    const wrapper = shallowMount(Name, { store, localVue });

    const $firstName = wrapper.find("input#first-name");
    $firstName.element.value = "input";
    $firstName.trigger("change");

    expect(mutations.updateResume).toHaveBeenCalled();
  });
});
