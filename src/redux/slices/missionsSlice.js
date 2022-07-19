import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchMissions } from '../../services/missionsService';

const initialState = {
  isLoading: false,
  isFaild: false,
  items: [],
};

export const fetchMissionsThunk = createAsyncThunk(
  '/fetchMissions',
  async () => {
    const { data } = await fetchMissions();
    return data;
  },
);

const missionsSlice = createSlice({
  name: 'missions',
  initialState,
  extraReducers: {
    [fetchMissionsThunk.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.items = action.payload;
    },
    [fetchMissionsThunk.pending]: (state) => { state.isLoading = true; },
    [fetchMissionsThunk.rejected]: (state) => { state.isFaild = true; },
  },
});

export default missionsSlice.reducer;
