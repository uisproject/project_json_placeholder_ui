import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { createLogger } from "redux-logger";

import authReducer from "./authSlice";
import getPostAPIReducer from "./getPostSliceAPI";

const logger = createLogger();
const middleware = [logger];

const store = configureStore({
  // middleware: getDefaultMiddleware().concat([...middleware]),
  devTools: true,
  reducer: {
    authAPI: authReducer,
    getPostAPI: getPostAPIReducer,
  },
});

export default store;
