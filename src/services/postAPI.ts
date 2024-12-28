// Utils
import { api } from "../utils/api";
// Types
import { PostProps } from "../types";

export const createPost = async (postData: PostProps) => {
  const response = await api.post("/posts", postData);
  return response.data;
};

export const getPosts = async () => {
  const response = await api.get("/posts");
  return response.data;
};

export const getPostById = async (postId: string) => {
  const response = await api.get(`/posts/${postId}`);
  return response.data;
};

export const updatePost = async (
  postId: string,
  updatedPostData: PostProps
) => {
  const response = await api.put(`/posts/${postId}`, updatedPostData);
  return response.data;
};

export const deletePost = async (postId: string) => {
  const response = await api.delete(`/posts/${postId}`);
  return response.data;
};
