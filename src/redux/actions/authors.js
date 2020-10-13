import axios from "axios";

import { SET_AUTHORS } from "./actionTypes";

const instance = axios.create({
  baseURL: "https://the-index-api.herokuapp.com",
});

export const fetchAuthors = () => {
  return async (dispatch) => {
    try {
      const res = await instance.get("/api/authors/");
      const authors = res.data;
      dispatch({
        type: SET_AUTHORS,
        payload: authors,
      });
    } catch (error) {
      console.error(error);
    }
  };
};
