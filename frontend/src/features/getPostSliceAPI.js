import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { message } from "antd";
import { useSelector } from "react-redux";

const initialState = {
  isLoading: true,
  data: [],
};

export const getPostService = createAsyncThunk(
  "api/getPost",
  async (action, thunkAPI) => {
    const { instance, limit, page } = action;
    try {
      const { data } = await instance.get(
        `v2/posts?limit=${limit}&page=${page}`
      );
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.response.data);
    }
  }
);

const getPostApiSlice = createSlice({
  name: "api/getPost",
  initialState,
  reducers: {
    addPost: (state, { payload }) => {
      state.data = payload;
    },
  },
  extraReducers: {
    [getPostService.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.data = payload;
    },
    [getPostService.rejected]: (state, { payload }) => {
      state.isLoading = true;
      state.data = [];
      message.error(payload.message);
    },
  },
});

export const UseSelectGetPosts = () => {
  const state = useSelector((state) => state.getPostAPI);
  return state;
};

export const { addPost } = getPostApiSlice.actions;

export default getPostApiSlice.reducer;
