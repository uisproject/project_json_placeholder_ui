import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";

import { postsAPI } from "../api/api";

const apiMiddleware = [postsAPI.middleware];

const store = configureStore({
  middleware: getDefaultMiddleware().concat([...apiMiddleware]),
  reducer: {
    // api reducer
    [postsAPI.reducerPath]: postsAPI.reducer,
  },
});

setupListeners(store.dispatch);

export default store;
