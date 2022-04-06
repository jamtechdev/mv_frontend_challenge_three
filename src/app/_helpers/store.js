import { configureStore } from '@reduxjs/toolkit';
import playListReducer from '../reducer';

export const store = configureStore({
  reducer: {
    playlist: playListReducer
  }
});
