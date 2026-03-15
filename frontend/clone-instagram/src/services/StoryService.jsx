import axios from "axios";

const urlStories = "http://localhost:8080/stories";

export const getAllStories = () => {
  return axios.get(urlStories)
};
