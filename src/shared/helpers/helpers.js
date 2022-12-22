export const pendingCallback = (store) => {
  store.status = 'pending';
  store.error = null;
};

export const rejectedCallback = (store, { payload }) => {
  store.status = 'error';
  store.error = payload;
};
