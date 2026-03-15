import axios from "axios";

const urlPosts = "http://localhost:8080/posts";
const urlStories = "http://localhost:8080/stories"

export const getAllPosts = () => {
  return axios.get(urlPosts);
};
