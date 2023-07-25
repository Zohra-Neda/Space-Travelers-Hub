import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  loading: false,
  value: [],
  error: '',
};

const ROCKETURL = 'https://api.spacexdata.com/v4/rockets';

export const fetchRockets = createAsyncThunk('fetchRockets', async () => {
  try {
    const response = await fetch(ROCKETURL);
    if (!response.ok) {
      throw new Error('Failed to fetch rockets');
    }
    const data = await response.json();
    const rockets = data.map((rocketData) => ({
      id: rocketData.id,
      name: rocketData.name,
      description: rocketData.description,
      image: rocketData.flickr_images[0],
      reserved: false,
    }));
    return rockets;
  } catch (error) {
    throw new Error('Failed to fetch rockets');
  }
});

const rocketSlice = createSlice({
  name: 'rockets',
  initialState,
  reducers: {
    reservedRocket: (state, action) => {
      const newState = state.value.map((rocket) => {
        if (rocket.id !== action.payload) return rocket;
        return { ...rocket, reserved: true };
      });
      state.value = newState;
    },

    cancelReserve: (state, action) => {
      const newState = state.value.map((rocket) => {
        if (rocket.id !== action.payload) return rocket;
        return { ...rocket, reserved: false };
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
    builder.addCase(fetchRockets.rejected, (state) => {
      state.loading = false;
      state.value = [];
      state.error = 'Failed to fetch rockets';
    });
  },
});

export default rocketSlice.reducer;
export const { reservedRocket, cancelReserve } = rocketSlice.actions;
