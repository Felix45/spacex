import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import fetchRockets from '../../services/rocketsService';

const initialState = {
  isLoading: false,
  isFaild: false,
  rockets: [],
};

export const fetchRocketsThunk = createAsyncThunk(
  'rockets/fetchRockets',
  async () => {
    const { data } = await fetchRockets();
    return data;
  },
);

const rocketsSlice = createSlice({
  name: 'rockets',
  initialState,
  extraReducers: {
    [fetchRocketsThunk.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.rockets = action.payload;
    },
    [fetchRocketsThunk.pending]: (state) => { state.isLoading = true; },
    [fetchRocketsThunk.rejected]: (state) => { state.isFaild = true; },
  },
});

export default rocketsSlice.reducer;
