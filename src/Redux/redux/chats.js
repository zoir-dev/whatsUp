import { createSlice } from "@reduxjs/toolkit";

const chatSlice = createSlice({
  name: "chat",
  initialState: [],
  reducers: {
    addChat: (state, action) => {
      state.push(action.payload);
    },
    clearChat: () => [],
  },
});

export const { addChat, clearChat } = chatSlice.actions;
export default chatSlice.reducer;
