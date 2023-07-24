<<<<<<< HEAD
=======
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  loading: false,
  value: [],
  error: '',
};
const ROCKETURL = 'https://api.spacexdata.com/v4/rockets';

export const fetchRockets = createAsyncThunk('fetchRockets', async () => {
  const response = await axios.get(`${ROCKETURL}`);
  const rockets = response.data.map((data) => ({
    id: data.id,
    name: data.name,
    description: data.description,
    image: data.flickr_images[0],
    reserved: false,
  }));
  return rockets;
});

const rocketSlice = createSlice({
  name: 'rockets',
  initialState,
  reducers: {
    reservedRocket: (state, action) => {
      const newState = state.value.map((rocket) => {
        if (rocket.id !== action.payload) return rocket;
        return ({ ...rocket, reserved: true });
      });
      state.value = newState;
    },

    cancelReserve: (state, action) => {
      const newState = state.value.map((rocket) => {
        if (rocket.id !== action.payload) return rocket;
        return ({ ...rocket, reserved: false });
      });
      state.value = newState;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchRockets.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchRockets.fulfilled, (state, action) => {
      state.loading = false;
      state.value = action.payload;
      state.error = '';
    });
    builder.addCase(fetchRockets.rejected, (state, action) => {
      state.loading = false;
      state.value = [];
      state.error = action.error.message;
    });
  },
});

export default rocketSlice.reducer;
export const { reservedRocket, cancelReserve } = rocketSlice.actions;
>>>>>>> development
