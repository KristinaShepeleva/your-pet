export const handelPending = state => {
  state.isLoading = true;
};
export const handelRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = {
    message: payload.message,
    status: payload.status,
  };
};

export const handelFulfilled = (state, { payload }) => {
  state.notices = payload;
  state.isLoading = false;
  state.error = { message: '', status: null };
};
// export const selfFulffiled = (state, { payload }) => {
//   state.notices = payload;
//   state.isLoading = false;
//   state.error = { message: '', status: null };
// };
export const getByIdFulfilled = (state, { payload }) => {
  state.oneNotice = payload;
  state.isLoading = false;
  state.error = { message: '', status: null };
};

export const addNoticeFulfilled = (state, { payload }) => {
  state.notices.push(payload);
  state.isLoading = false;
  state.error = { message: '', status: null };
};

export const deleteFulfilled = (state, { payload }) => {
  console.log(payload);
};
export const updateFulfilled = (state, { payload }) => {
  console.log(payload);
};
