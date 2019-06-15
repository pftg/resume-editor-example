import { actions } from "@/store/";
import { testAction } from "../helpers/store";

describe("actions", () => {
  describe("#updateResume", () => {
    it("updateResume with optimistic update", done => {
      const resume = { firstName: "New Name" };

      testAction(
        actions.updateResume,
        resume,
        { resume: { firstName: "Old Name" } },
        [{ type: "updateResume", payload: resume }],
        done
      );
    });
  });

  describe("#editJob", () => {
    it("sends updates to the API", done => {
      const job = {};

      testAction(
        actions.editJob,
        { job, title: "Founder" },
        {
          resume: { jobs: [job] }
        },
        [{ type: "editJob", payload: { job, title: "Founder" } }],
        done
      );
    });
  });
});
