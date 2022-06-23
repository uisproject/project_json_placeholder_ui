import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { publicInstance } from "../api/api";

const initialState = {
  isLoading: true,
  data: [],
};

export const getPostService = createAsyncThunk(
  "api/getPost",
  async (action, thunkAPI) => {
    const { limit, page } = action;
    const { data } = await publicInstance.get(
      `v1/posts?limit=${limit}&page=${page}`
    );
    return data;
  }
);

const getPostApiSlice = createSlice({
  name: "api/getPost",
  initialState,
  extraReducers: {
    [getPostService.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.data = payload;
    },
    [getPostService.rejected]: () => {},
  },
});

export const UseSelectGetPosts = () => {
  const state = useSelector((state) => state.getPostAPI);
  return state;
};

export default getPostApiSlice.reducer;
