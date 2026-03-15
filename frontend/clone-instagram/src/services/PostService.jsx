import axios from "axios";

const urlPosts = "http://localhost:8080/posts";

export const getAllPosts = () => {
  return axios.get(urlPosts);
};
