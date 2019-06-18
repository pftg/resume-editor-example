import { createLocalVue, mount, shallowMount } from "@vue/test-utils";
import Vuex from "vuex";
// NOTE: We do not need it to use for our tests. But because of warning we have to enable it
import router from "@/router";

import Name from "@/views/Name.vue";

const localVue = createLocalVue();

localVue.component("base-layout", require("@/components/BaseLayout").default);
localVue.component("page-details", require("@/components/PageDetails").default);
localVue.component("text-field", require("@/components/BaseTextField").default);

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
      actions,
      router
    });
  });

  it("renders views with state", () => {
    const wrapper = mount(Name, {
      store,
      localVue,
      stubs: { RouterLink: true }
    });

    expect(wrapper.find("#first-name").element.value).toMatch("FirstName");
    expect(wrapper.find("#last-name").element.value).toMatch("LastName");
  });

  it("updates names on keyup", () => {
    const wrapper = shallowMount(Name, { store, localVue });
    const $firstName = wrapper.find("#first-name");

    $firstName.vm.$emit("input", "New First Name");

    expect(actions.updateResume).toHaveBeenCalled();
  });
});
