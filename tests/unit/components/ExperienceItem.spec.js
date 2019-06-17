import { createLocalVue, shallowMount } from "@vue/test-utils";
import VeeValidate from "vee-validate";
import flushPromises from "flush-promises";

import Vuex from "vuex";
// NOTE: We do not need it to use for our tests. But because of warning we have to enable it
import router from "@/router";

import ExperienceItem from "@/components/ExperienceItem.vue";

const localVue = createLocalVue();
localVue.use(Vuex);
localVue.use(VeeValidate);
localVue.use(router);

describe("ExperienceItem.vue", () => {
  let actions;
  let store;

  beforeEach(() => {
    actions = {
      editJob: jest.fn()
    };

    store = new Vuex.Store({
      state: {
        resume: {
          jobs: [
            {
              title: "Founder",
              company: "JetThoughts",
              startDate: "Sep 08",
              endDate: "",
              highlights: [{ text: "Highlight 1" }, { text: "Highlight 2" }]
            }
          ]
        }
      },
      actions
    });
  });

  it("renders form data from store", () => {
    const wrapper = shallowMount(ExperienceItem, {
      store,
      localVue,
      propsData: {
        job: {
          title: "Founder",
          company: "Company",
          startDate: "2008/09",
          endDate: "2009/10"
        }
      }
    });

    const $title = wrapper.find('[data-cy="job-title"]');
    expect($title.element.value).toMatch("Founder");
  });

  it("has not any validation errors when startDate less then endDate", async () => {
    const wrapper = shallowMount(ExperienceItem, {
      store,
      localVue,
      propsData: {
        job: {
          title: "",
          company: "",
          startDate: "2008/09",
          endDate: "2009/10"
        }
      }
    });

    expect(wrapper.vm.$validator.errors.any()).toBe(false);
  });

  it("updates names on change", async () => {
    const wrapper = shallowMount(ExperienceItem, {
      store,
      localVue,
      propsData: {
        job: {
          title: "Founder",
          company: "Company",
          startDate: "Sep 08",
          endDate: ""
        }
      }
    });

    const $title = wrapper.find('[data-cy="job-title"]');

    $title.element.value = "Co-Founder";
    $title.trigger("input");

    await flushPromises();

    expect(actions.editJob).toHaveBeenCalled();
  });

  it("validates end date to be after start date or empty", async () => {
    // important to turn off the sync behavior.
    const wrapper = shallowMount(ExperienceItem, {
      store,
      localVue,
      propsData: {
        job: {
          title: "Founder",
          company: "Company",
          startDate: "2002/02",
          endDate: "2001/02"
        }
      }
    });

    await flushPromises();
    const error = wrapper.find(".js-end_date-error");
    expect(error.text()).toBe("The End Date must be after Start Date.");
  });
});
