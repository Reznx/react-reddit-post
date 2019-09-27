import React from "react";

export const Posts = ({ posts }) => {
  return (
    <ul className="list-group">
      {posts.map(post => (
        <li className="list-group-item" key={post.id}>
          <strong>{post.title}</strong>
        </li>
      ))}
    </ul>
  );
};
