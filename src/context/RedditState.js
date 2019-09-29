import React, { useReducer } from "react";
import { RedditContext } from "./redditContext";
import { redditReducer } from "./redditReducer";

export const RedditState = ({ children }) => {
  const initialState = {
    posts: [],
    loading: false
  };
  const [state, dispatch] = useReducer(redditReducer, initialState);
  return <RedditContext.Provider value={{}}>{children}</RedditContext.Provider>;
};
