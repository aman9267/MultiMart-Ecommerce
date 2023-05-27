import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const likeSLice = createSlice({
  name: "like",
  initialState,
  reducers: {
    addLike(state, action) {
      state.push(action.payload);
    },
  },
});

export const { addLike } = likeSLice.actions;
export default likeSLice.reducer;
