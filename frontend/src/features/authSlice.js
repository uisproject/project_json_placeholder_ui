import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { publicInstance } from "../api/api";

const getUserInfoFromLocalStorage = JSON.parse(
  window.localStorage.getItem("userInfo")
);

const initialState = {
  accessToken: getUserInfoFromLocalStorage.accessToken || "",
  refreshToken: getUserInfoFromLocalStorage.refreshToken || "",
  username: getUserInfoFromLocalStorage.username || "",
  isLogged: getUserInfoFromLocalStorage.isLogged || false,
};

export const loginService = createAsyncThunk(
  "api/login",
  async (action, thunkAPI) => {
    const { data } = await publicInstance.post(`v1/token`, action);

    const payload = {
      accessToken: `Bearer ${data.accessToken}`,
      refreshToken: data.refreshToken,
      username: data.username,
      isLogged: true,
    };

    window.localStorage.setItem("userInfo", JSON.stringify(payload));
    return payload;
  }
);

const authSlice = createSlice({
  name: "api/login",
  initialState,
  extraReducers: {
    [loginService.fulfilled]: (state, { payload }) => {
      const { accessToken, refreshToken, username } = payload;
      state.accessToken = `Bearer ${accessToken}`;
      state.refreshToken = refreshToken;
      state.username = username;
      state.isLogged = true;
    },
    [loginService.rejected]: () => {},
  },
});

export const UseSelectAuth = () => {
  const state = useSelector((state) => state.authAPI);
  return state;
};

export default authSlice.reducer;
