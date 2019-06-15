// helper for testing action with expected mutations
export const testPlugin = (plugin, state, expectedMutations, done) => {
  let count = 1;

  // mock commit
  const commit = (type, payload) => {
    const mutation = expectedMutations[count];

    try {
      expect(type).toEqual(mutation.type);
      if (payload) {
        expect(payload).toEqual(mutation.payload);
      }
    } catch (error) {
      done(error);
    }

    count++;
    if (count >= expectedMutations.length) {
      done();
    }
  };

  // call the action with mocked store and arguments
  plugin({
    commit,
    state,
    subscribe: cb =>
      cb(expectedMutations[count - 1], expectedMutations[count - 1].payload)
  });

  // check if no mutations should have been dispatched
  if (expectedMutations.length === 1) {
    expect(count).toEqual(1);
    done();
  }
};

// helper for testing action with expected mutations
export const testAction = (action, payload, state, expectedMutations, done) => {
  let count = 0;

  // mock commit
  const commit = (type, payload) => {
    const mutation = expectedMutations[count];

    try {
      expect(type).toEqual(mutation.type);
      if (payload) {
        expect(payload).toEqual(mutation.payload);
      }
    } catch (error) {
      done(error);
    }

    count++;
    if (count >= expectedMutations.length) {
      done();
    }
  };

  // call the action with mocked store and arguments
  action({ commit, state }, payload);

  // check if no mutations should have been dispatched
  if (expectedMutations.length === 0) {
    expect(count).toEqual(0);
    done();
  }
};
