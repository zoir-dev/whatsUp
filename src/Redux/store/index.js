import { configureStore } from "@reduxjs/toolkit";
import chats from "../redux/chats";
import user from "../redux/user";

export const store = configureStore({
  reducer: {
    chats,
    user,
  },
});
