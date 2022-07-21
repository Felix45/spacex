import { configureStore } from '@reduxjs/toolkit';
import missionsReducer from './slices/missionsSlice';
import rocketsReducer from './slices/rocketsSlice';

const reducer = {
  missions: missionsReducer,
  rockets: rocketsReducer,
};

const store = (preloadedState) => configureStore({ reducer, preloadedState });

export default store;
