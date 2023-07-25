import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  loading: false,
  value: [],
  error: '',
};

const MISSIONURL = 'https://api.spacexdata.com/v3/missions';

export const fetchMissions = createAsyncThunk('fetchMissions', async () => {
  const response = await axios.get(MISSIONURL);
  const missions = await response.data.map((result) => ({
    id: result.mission_id,
    name: result.mission_name,
    description: result.description,
    joined: false,
  }));
  return missions;
});

const missionSlice = createSlice({
  name: 'missions',
  initialState,
  reducers: {
    joinMission: (state, action) => {
      const newState = state.value.map((mission) => {
        if (mission.id !== action.payload) return mission;
        return ({ ...mission, joined: true });
      });
      state.value = newState;
    },

    leaveMission: (state, action) => {
      const newState = state.value.map((mission) => {
        if (mission.id !== action.payload) return mission;
        return ({ ...mission, joined: false });
      });
      state.value = newState;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchMissions.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchMissions.fulfilled, (state, action) => {
      state.loading = false;
      state.value = action.payload;
      state.error = '';
    });
    builder.addCase(fetchMissions.rejected, (state, action) => {
      state.loading = false;
      state.value = [];
      state.error = action.error.message;
    });
  },
});

export default missionSlice.reducer;
export const { joinMission, leaveMission } = missionSlice.actions;
