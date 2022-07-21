import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import fetchMissions from '../../services/missionsService';

const initialState = {
  isLoading: false,
  isFaild: false,
  items: [
    {
      mission_id: 2,
      mission_name: 'Telstar',
      reserved: true,
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, consequatur ut. Distinctio nostrum voluptatibus recusandae eum, velit dolores mollitia nam aliquid consectetur enim corporis perspiciatis repudiandae animi, sed hic tenetur!',
    },
  ],
};

export const fetchMissionsThunk = createAsyncThunk(
  'missions/fetchMissions',
  async () => {
    const { data } = await fetchMissions();
    data.forEach((item) => { item.reserved = false; });
    return data;
  },
);

const missionsSlice = createSlice({
  name: 'missions',
  initialState,
  reducers: {
    joinMission(state, action) {
      const newItems = state.items.map((mission) => {
        if (mission.mission_id === action.payload.mission_id) {
          return { ...mission, reserved: !mission.reserved };
        }
        return mission;
      });
      return { ...state, items: newItems };
    },
  },
  extraReducers: {
    [fetchMissionsThunk.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.items = action.payload;
    },
    [fetchMissionsThunk.pending]: (state) => { state.isLoading = true; },
    [fetchMissionsThunk.rejected]: (state) => { state.isFaild = true; },
  },
});
export const { joinMission } = missionsSlice.actions;
export default missionsSlice.reducer;
