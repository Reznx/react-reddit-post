import React, { Fragment } from "react";
import { Form } from "../components/Form";
import { Posts } from "../components/Posts";

export const Home = () => {
  const posts = new Array(3).fill("").map((_, i) => ({
    id: i,
    title: `Post ${i + 1}`
  }));
  return (
    <Fragment>
      <Form />
      <hr />
      <Posts posts={posts} />
    </Fragment>
  );
};
