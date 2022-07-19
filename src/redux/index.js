import { configureStore } from '@reduxjs/toolkit';
import missionsReducer from './slices/missionsSlice';

const reducer = {
  missions: missionsReducer,
};

const store = configureStore({ reducer });

export default store;
