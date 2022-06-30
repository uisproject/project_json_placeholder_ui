import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { message } from "antd";
import { useSelector } from "react-redux";

const initialState = {
  isLoading: true,
  data: [],
};

export const getProfileService = createAsyncThunk(
  "api/getProfile",
  async (action, thunkAPI) => {
    const { instance } = action;
    try {
      const { data } = await instance.get("http://localhost:5000/v2/profile");
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.response.data);
    }
  }
);

const getProfileSlice = createSlice({
  name: "api/getProfile",
  initialState,
  extraReducers: {
    [getProfileService.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.data = payload;
    },
    [getProfileService.rejected]: (state, { payload }) => {
      state.isLoading = true;
      state.data = [];
      message.error(payload.message);
    },
  },
});

export const UseSelectProfile = () => {
  const state = useSelector((state) => state.getProfileAPI);
  return state;
};

export default getProfileSlice.reducer;
