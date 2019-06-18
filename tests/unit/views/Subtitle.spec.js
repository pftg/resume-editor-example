import { createLocalVue, mount, shallowMount } from "@vue/test-utils";
import Vuex from "vuex";
// NOTE: We do not need it to use for our tests. But because of warning we have to enable it
import router from "@/router";

import Subtitle from "@/views/Subtitle.vue";

const localVue = createLocalVue();

localVue.component("base-layout", require("@/components/BaseLayout").default);
localVue.component("page-details", require("@/components/PageDetails").default);
localVue.component("text-field", require("@/components/BaseTextField").default);

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
          subtitle: "Founder"
        }
      },
      actions,
      router
    });
  });

  it("renders form with names from store", () => {
    const wrapper = mount(Subtitle, {
      store,
      localVue,
      stubs: { RouterLink: true }
    });

    expect(wrapper.find("#subtitle").element.value).toMatch("Founder");
  });

  it("updates names on change", () => {
    const wrapper = shallowMount(Subtitle, { store, localVue });

    const $subtitle = wrapper.find("#subtitle");
    $subtitle.vm.$emit("input", "Co-Founder");

    expect(actions.updateResume).toHaveBeenCalled();
  });
});
