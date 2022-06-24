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
  userData: getUserInfoFromLocalStorage.userData || {},
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
        userData: res?.data?.userData,
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
  reducers: {
    logoutHandler: (state) => {
      window.localStorage.removeItem("userInfo");
      state.accessToken = "";
      state.isLogged = false;
      state.refreshToken = "";
      state.userData = {};
    },
  },
  extraReducers: {
    [loginService.fulfilled]: (state, { payload }) => {
      const { accessToken, refreshToken, userData } = payload;
      state.accessToken = `Bearer ${accessToken}`;
      state.refreshToken = refreshToken;
      state.userData = userData;
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

export const { logoutHandler } = authSlice.actions;

export default authSlice.reducer;
