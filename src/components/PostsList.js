import React from "react";
import PropTypes from "prop-types";
import PostItem from "./PostItem";

const PostsList = ({ posts }) => {
  return (
    <div className="row mt-5">
      {posts.map(post => (
        <PostItem key={post.data.id} post={post} />
      ))}
    </div>
  );
};

PostsList.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default PostsList;
