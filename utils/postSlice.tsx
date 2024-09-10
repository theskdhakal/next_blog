import { createSlice } from "@reduxjs/toolkit";
import { User } from "./types";

const initialState = {
  posts: [],
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setPosts: (state, action) => {
      state.posts = action.payload;
    },
  },
});

const { reducer, actions } = userSlice;

export const { setPosts } = actions;

export default reducer;
