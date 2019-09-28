import React from "react";
import PostItem from "./PostItem";

const PostsList = ({ posts }) => {
  return (
    <div className="row">
      {posts.map(post => (
        <PostItem key={post.id} post={post} />
      ))}
    </div>
  );
};

export default PostsList;
