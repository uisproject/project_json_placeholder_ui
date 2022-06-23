import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  accessToken: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducer: {},
});

export default authSlice.reducer;
