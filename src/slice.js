import { createAsyncThunk, createSlice  } from '@reduxjs/toolkit';

const searchRobotsSlice = createSlice({
    name: 'searchRobot',
    initialState: {
        searchField: ''
    },
    reducers: {
        setSearchField: (state, action) => {
            state.searchField = action.payload;
        }
    }
});

export const requestRobots = createAsyncThunk(
    'REQUEST_ROBOTS',
    async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      return await response.json();
    }
  );
  
const requestRobotsSlice = createSlice({
    name: 'requestRobots',
    initialState: {
        robots: [],
        isPending: true,
        error: ''
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(requestRobots.pending, (state) => {
            console.log('here1', state);
            state.isPending = true;
        })
        builder.addCase(requestRobots.fulfilled, (state, action) => {
            console.log('here2', state);
            state.isPending = false;
            state.robots = action.payload;
        })
        builder.addCase(requestRobots.rejected, (state, action) => {
            console.log('here3', state);
            state.isPending = false;
            state.error = action.payload;
        });
    }
});
  
export const requestRobotsReducer = requestRobotsSlice.reducer;

export const searchRobotsReducer = searchRobotsSlice.reducer;

export const { setSearchField } = searchRobotsSlice.actions;