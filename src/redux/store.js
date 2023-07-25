import { configureStore } from '@reduxjs/toolkit';
import rocketReducer from './rocketSlice';
import missionReducer from './missionSlice';

const store = configureStore({
  reducer: {
    rockets: rocketReducer,
    missions: missionReducer,
  },
});

export default store;
