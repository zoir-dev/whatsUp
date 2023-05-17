// userSlice.js

import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: null,
  reducers: {
    signIn: (state, action) => {
      // Update the user information after signing in
      return action.payload;
    },
    signOut: () => {
      // Clear the user information after signing out
      return null;
    },
  },
});

export const { signIn, signOut } = userSlice.actions;
export default userSlice.reducer;
