import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { message } from "antd";
import { useSelector } from "react-redux";
import { addPost } from "./getPostSliceAPI";

const initialState = {
  newData: [],
  createdNumber: 0,
};

export const createPostService = createAsyncThunk(
  "api/createPost",
  async (action, thunkAPI) => {
    const { instance, body } = action;
    try {
      const createdData = await instance.post("v2/posts", body);
      const getPostData = thunkAPI.getState().getPostAPI.data;

      const updatedPostData = {
        ...getPostData,
        data: [createdData?.data?.data, ...getPostData.data],
      };
      thunkAPI.dispatch(addPost(updatedPostData));
      return {
        createdNumber: thunkAPI.getState().createPostAPI.createdNumber + 1,
        updatedPostData: updatedPostData,
      };
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);

const createPostAPISlice = createSlice({
  name: "api/createPost",
  initialState,
  extraReducers: {
    [createPostService.fulfilled]: (state, { payload }) => {
      const { createdNumber, updatedPostData } = payload;
      state.newData.push(updatedPostData);
      state.createdNumber = createdNumber;
    },
    [createPostService.rejected]: (state, { payload }) => {
      const { createdNumber } = payload;

      console.log(createdNumber);
    },
  },
});

export const UseSelectCreatePostAPI = () => {
  const state = useSelector((state) => state.createPostAPI);
  return state;
};

export default createPostAPISlice.reducer;
