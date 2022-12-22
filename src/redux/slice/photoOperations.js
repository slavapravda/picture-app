import { createAsyncThunk } from '@reduxjs/toolkit';

import { photoServices } from '../../services/photo.services';

export const getPhotos = createAsyncThunk('photo/getPhotos', async (_, { rejectWithValue }) => {
  try {
    return await photoServices.allPhotos();
  } catch (error) {
    rejectWithValue(error.message);
  }
});
export const getSinglePhoto = createAsyncThunk(
  'photo/getSinglePhoto',
  async ({ id }, { rejectWithValue }) => {
    try {
      return await photoServices.singlePhoto(id);
    } catch (error) {
      rejectWithValue(error.message);
    }
  }
);
