const REMOTE_STORAGE_KEY = "remote-key-resume-editor-vuejs-example";

export default {
  getResume(success) {
    setTimeout(() => {
      const response = JSON.parse(
        window.localStorage.getItem(REMOTE_STORAGE_KEY) || "{}"
      );
      console.log(response);

      success(response);
    }, 100);
  },

  updateResume(resume, success, fail) {
    setTimeout(() => {
      // Simulate errors
      // TODO: Need to make it optional
      // if (true) {
        window.localStorage.setItem(REMOTE_STORAGE_KEY, JSON.stringify(resume));
        // simulate API response parsing
        success(window.localStorage.getItem(REMOTE_STORAGE_KEY));
      // } else {
      //   fail("Server returned error");
      // }
    }, 100);
  }
};
