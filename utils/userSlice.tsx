import { createSlice } from "@reduxjs/toolkit";
import { User } from "../utils/types";

const initialState = {
  user: {},
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

const { reducer, actions } = userSlice;

export const { setUser } = actions;

export default reducer;
