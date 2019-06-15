import { mutations } from "@/store/";

const { updateResume, editJob } = mutations;

describe("mutations", () => {
  describe("updateResume", () => {
    it("merge new changes", () => {
      const state = { resume: { firstName: "First Name" } };

      updateResume(state, {
        firstName: "New First Name",
        lastName: "New Last Name"
      });

      expect(state.resume).toEqual({
        firstName: "New First Name",
        lastName: "New Last Name"
      });
    });
  });

  describe("editJob", () => {
    it("merge new changes", () => {
      const job = { title: "Founder" };
      const state = { resume: { jobs: [job] } };

      editJob(state, {
        job,
        title: "Co-Founder",
        company: "JetThoughts"
      });

      expect(state.resume.jobs[0]).toEqual({
        title: "Co-Founder",
        company: "JetThoughts"
      });
    });
  });
});
