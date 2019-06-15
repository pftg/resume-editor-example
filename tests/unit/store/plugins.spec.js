import { testPlugin } from "../helpers/store";
import api from "../../../src/api/hireclub-client.js";

import { storeSnapshotOnApi } from "@/store/";

jest.mock("../../../src/api/hireclub-client.js");

describe("plugins", () => {
  beforeEach(() => api.updateResume.mockReset());

  it("send snapshot version to API", done => {
    api.updateResume.mockReturnValue(Promise.resolve());

    testPlugin(
      storeSnapshotOnApi,
      { resume: { firstName: "Old Name" } },
      [{ type: "updateResume", payload: { firstName: "New Name" } }],
      done
    );

    expect(api.updateResume).toHaveBeenCalledTimes(1);
  });

  it("revert state to previous with fakeplugin", done => {
    api.updateResume.mockReturnValue(Promise.reject("Server Error"));

    testPlugin(
      storeSnapshotOnApi,
      { resume: { firstName: "Old Name" } },
      [
        { type: "updateResume", payload: { firstName: "New Name" } },
        { type: "setResume", payload: { firstName: "Old Name" } }
      ],
      done
    );

    expect(api.updateResume).toHaveBeenCalledTimes(1);
  });
});
