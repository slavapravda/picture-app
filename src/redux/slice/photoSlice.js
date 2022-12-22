import { createSlice } from '@reduxjs/toolkit';

import { getPhotos } from './photoOperations';
import { getSinglePhoto } from './photoOperations';

import { pendingCallback, rejectedCallback } from '../../shared/helpers/helpers';

const initialState = {
  photos: [],
  singlePhoto: null,
  status: null,
  error: null
};

const photoSlice = createSlice({
  name: 'photoSlice',
  initialState,
  reducers: {},
  extraReducers: {
    [getPhotos.pending]: pendingCallback,
    [getPhotos.fulfilled]: (store, { payload }) => {
      store.photos = payload;
    },
    [getPhotos.rejected]: rejectedCallback,
    [getSinglePhoto.pending]: pendingCallback,

    [getSinglePhoto.fulfilled]: (store, { payload }) => {
      store.singlePhoto = payload;
      store.status = 'fulfilled';
    },
    [getSinglePhoto.rejected]: rejectedCallback
  }
});
const photoReducer = photoSlice.reducer;

export default photoReducer;
