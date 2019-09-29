import React from "react";
import { getCurrentDate } from "../utils/dateTime";
import PropTypes from "prop-types";

const PostItem = ({ post }) => {
  return (
    <div className="col-sm-12 col-md-6 col-lg-4">
      <div className=" card-link">
        <div className="card">
          <div className="card-body">
            <div className="card-title">
              <a href={post.data.url} target="_blank" rel="noopener noreferrer">
                {post.data.title}
              </a>
            </div>
            <p className="card-text">
              Дата создания: {getCurrentDate(post.data.created)}
              <br />
              Автор поста: {post.data.author}
              <br />
              Запостили на: r/{post.data.subreddit}
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
