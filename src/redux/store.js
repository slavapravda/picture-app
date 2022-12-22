import { configureStore, combineReducers } from '@reduxjs/toolkit';
import photoReducer from './slice/photoSlice';

const rootReducer = combineReducers({ photoReducer });

const store = configureStore({
  reducer: rootReducer
});

export default store;
