import React from "react";

const PostItem = ({ post }) => {
  return (
    <div className="col-sm-12 col-md-6 col-lg-4">
      <div className=" card-link">
        <div className="card">
          <div className="card-img-top">
            <a href="/" target="_blank" rel="noopener noreferrer">
              <img
                src={post.img}
                className="card-img-top"
                width="100%"
                alt="Title"
              />
            </a>
          </div>
          <div className="card-body">
            <div className="card-title">
              <a href="/" target="_blank" rel="noopener noreferrer">
                {post.title}
              </a>
            </div>
            <p className="card-text">
              Created: {post.data}
              <br />
              Author: {post.author}
              <br />
              Posted on:{" "}
              <a href="/" target="_blank" rel="noopener noreferrer">
                r/
              </a>
            </p>
            <a href="/" target="_blank" rel="noopener noreferrer">
              <button className="btn btn-secondary btn-sm top-right-float">
                View Post
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostItem;
