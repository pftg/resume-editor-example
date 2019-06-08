import { createLocalVue, shallowMount } from "@vue/test-utils";
import Vuex from "vuex";
// NOTE: We do not need it to use for our tests. But because of warning we have to enable it
import router from "@/router";

import Subtitle from "@/views/Subtitle.vue";

const localVue = createLocalVue();
localVue.use(Vuex);
localVue.use(router);

describe("Subtitle.vue", () => {
  let actions;
  let store;

  beforeEach(() => {
    actions = {
      updateResume: jest.fn()
    };

    store = new Vuex.Store({
      state: {
        resume: {
          subtitle: "Subtitle"
        }
      },
      actions
    });
  });

  it("renders form with names from store", () => {
    const wrapper = shallowMount(Subtitle, { store, localVue });

    const $subtitle = wrapper.find("input#subtitle");
    expect($subtitle.element.value).toMatch("Subtitle");
  });

  it("updates names on change", () => {
    const wrapper = shallowMount(Subtitle, { store, localVue });

    const $subtitle = wrapper.find("input#subtitle");
    $subtitle.element.value = "New Subtitle";
    $subtitle.trigger("change");

    expect(actions.updateResume).toHaveBeenCalled();
  });
});
