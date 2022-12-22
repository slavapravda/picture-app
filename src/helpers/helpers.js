export const pendingCallback = (state) => {
  state.status = 'pending';
  state.error = null;
};

export const rejectedCallback = (state, { payload }) => {
  state.status = 'error';
  state.error = payload;
};
