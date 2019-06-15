import { createLocalVue, shallowMount } from "@vue/test-utils";
import Vuex from "vuex";
// NOTE: We do not need it to use for our tests. But because of warning we have to enable it
import router from "@/router";

import ExperienceItem from "@/components/ExperienceItem.vue";

const localVue = createLocalVue();
localVue.use(Vuex);
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
          startDate: "Sep 08",
          endDate: ""
        }
      }
    });

    const $title = wrapper.find('[data-cy="job-title"]');

    expect($title.element.value).toMatch("Founder");
  });

  it("updates names on change", () => {
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

    expect(actions.editJob).toHaveBeenCalled();
  });
});
