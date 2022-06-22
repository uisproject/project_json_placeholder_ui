import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";

import { postsAPI } from "../api/api";
import userAuthReducer from "./userAuthSlice";

const apiMiddleware = [postsAPI.middleware];

const store = configureStore({
  middleware: getDefaultMiddleware().concat([...apiMiddleware]),
  reducer: {
    userAuth: userAuthReducer,
    // api reducer
    [postsAPI.reducerPath]: postsAPI.reducer,
  },
});

setupListeners(store.dispatch);

export default store;
