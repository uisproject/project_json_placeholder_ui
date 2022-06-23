import { publicInstance } from "./api";

export const fetchGetPost = async (action, thunkAPI) => {
  const { limit, page } = action;
  const { data } = await publicInstance.get(
    `v1/posts?limit=${limit}&page=${page}`
  );
  return JSON.stringify(data);
};
