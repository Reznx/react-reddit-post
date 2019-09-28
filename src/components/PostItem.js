import React from "react";
import PropTypes from "prop-types";

const PostItem = ({ post }) => {
  const dateUtc = post => {
    let utcDate = new Date(Date.UTC(post.data.created_utc));
    return utcDate;
  };

  return (
    <div className="col-sm-12 col-md-6 col-lg-4">
      <div className=" card-link">
        <div className="card">
          {/* {post.data ? (
            <div className="card-img-top">
              <a href={post.data.url} target="_blank" rel="noopener noreferrer">
                <img
                  src={post.data.url}
                  className="card-img-top"
                  width="100%"
                  alt="Title"
                />
              </a>
            </div>
          ) : (
            <p className="text-center">Нет превью</p>
          )} */}
          <div className="card-body">
            <div className="card-title">
              <a href={post.data.url} target="_blank" rel="noopener noreferrer">
                {post.data.title}
              </a>
            </div>
            <p className="card-text">
              Created: {post.data.created}
              <br />
              Author: {post.data.author_fullname}
              <br />
              Posted on: r/{post.data.subreddit}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

PostItem.propTypes = {
  post: PropTypes.object.isRequired
};

export default PostItem;
