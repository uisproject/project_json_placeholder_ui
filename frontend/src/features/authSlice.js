import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { message } from "antd";
import { useSelector } from "react-redux";
import { publicInstance } from "../api/api";

const getUserInfoFromLocalStorage = window.localStorage.getItem("userInfo")
  ? JSON.parse(window.localStorage.getItem("userInfo"))
  : false;

const initialState = {
  accessToken: getUserInfoFromLocalStorage.accessToken || "",
  refreshToken: getUserInfoFromLocalStorage.refreshToken || "",
  username: getUserInfoFromLocalStorage.username || "",
  isLogged: getUserInfoFromLocalStorage.isLogged || false,
};

export const loginService = createAsyncThunk(
  "api/login",
  async (action, thunkAPI) => {
    try {
      const res = await publicInstance.post(`v1/token`, action);

      const payload = {
        accessToken: `Bearer ${res?.data?.accessToken}`,
        refreshToken: res?.data?.refreshToken,
        username: res?.data?.username,
        isLogged: true,
      };

      window.localStorage.setItem("userInfo", JSON.stringify(payload));
      return payload;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.response.data);
    }
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
      message.success("Login Success!");
    },
    [loginService.rejected]: (state, { payload }) => {
      state.isError = payload.message;
      message.error(payload.message);
    },
  },
});

export const UseSelectAuth = () => {
  const state = useSelector((state) => state.authAPI);
  return state;
};

export default authSlice.reducer;
