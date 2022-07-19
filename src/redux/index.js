import { configureStore } from '@reduxjs/toolkit';
import missionsReducer from './slices/missionsSlice';
import rocketsReducer from './slices/rocketsSlice';

const reducer = {
  missions: missionsReducer,
  rockets: rocketsReducer,
};

const store = configureStore({ reducer });

export default store;
