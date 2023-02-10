import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  vertical: 0,
  horizontal: 0
}

const scrollPositionSlice = createSlice({
  name: 'scrollPosition',
  initialState,
  reducers: {
    scrollVertical: {
      reducer(state, action) {
        state.vertical = action.payload;
      }
    },
    scrollHorizontal: {
      reducer(state, action) {
        state.horizontal = action.payload
      }
    },
    scrollVerticalHorizontal:{
      reducer(state, action) {
        state.vertical = action.payload.vertical;
        state.horizontal = action.payload.horizontal;
      }
    },
    resetScroll: {
      reducer(state, action) {
        state.vertical = 0;
        state.horizontal = 0;
      }
    }
  }
})

export const getScrollPosition = (state) => state.scrollPosition;

export const { 
  scrollVertical, 
  scrollHorizontal, 
  scrollVerticalHorizontal, 
  resetScroll  
} = scrollPositionSlice.actions;

export default scrollPositionSlice.reducer;