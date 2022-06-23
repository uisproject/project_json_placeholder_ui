import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { createLogger } from "redux-logger";

import authReducer from "./authSlice";
import getPostAPIReducer from "./getPostSliceAPI";

const logger = createLogger();
const middleware = [];

const store = configureStore({
  middleware: getDefaultMiddleware().concat([...middleware]),
  devTools: false,
  reducer: {
    auth: authReducer,
    getPostAPI: getPostAPIReducer,
  },
});

export default store;
