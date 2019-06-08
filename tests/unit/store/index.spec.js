import { mutations } from "@/store/";

const { updateResume } = mutations;

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
});
