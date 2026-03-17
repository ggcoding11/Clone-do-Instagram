import axios from "axios";

const urlPosts = "http://localhost:8080/posts";
const urlStories = "http://localhost:8080/stories";

export const getAllData = () => {
  return Promise.all([axios.get(urlPosts), axios.get(urlStories)]);
};
