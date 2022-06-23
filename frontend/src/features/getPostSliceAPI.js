import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchGetPost } from "../services/postServices";
import { useSelector } from "react-redux";

const initialState = {
  isLoading: true,
  data: [],
};

export const getPostAPI = createAsyncThunk("api/getPost", fetchGetPost);

const getPostApiSlice = createSlice({
  name: "api/getPost",
  initialState,
  extraReducers: {
    [getPostAPI.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.data = JSON.parse(payload);
    },
    [getPostAPI.rejected]: () => {},
  },
});

export const UseSelectGetPosts = () => {
  const state = useSelector((state) => state.getPostAPI);
  return state;
};

export default getPostApiSlice.reducer;
