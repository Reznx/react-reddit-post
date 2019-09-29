import React from "react";
import { getCurrentDate } from "../utils/dateTime";
import PropTypes from "prop-types";

const PostItem = ({ post }) => {
  const data = post.data;

  return (
    <div className="col-sm-12 col-md-6 col-lg-4">
      <div className=" card-link">
        <div className="card">
          <div className="card-body">
            <div className="card-title">
              <a href={data.url} target="_blank" rel="noopener noreferrer">
                {data.title}
              </a>
            </div>
            <p className="card-text">
              Дата создания: {getCurrentDate(data.created)}
              <br />
              Автор поста: {data.author}
              <br />
              Запостили на: r/{data.subreddit}
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
