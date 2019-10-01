import React, { useState } from "react";
import PropTypes from "prop-types";

const Search = ({ onSearch, title, onChangeInput }) => {
  const [value, setValue] = useState("");

  const submitHandler = e => {
    e.preventDefault();

    if (title.trim()) {
      onSearch(title);
      onChangeInput(value);
    }
  };

  const onChange = event => {
    const { value } = event.target;
    onChangeInput(value);
  };

  return (
    <div className="input-group mb-2">
      <div className="input-group-prepend">
        <div className="input-group-text">r/</div>
      </div>
      <input
        type="text"
        className="form-control"
        name="search"
        onChange={onChange}
        value={title}
        placeholder="введите название сабреддита"
      />
      <div className="input-group-append">
        <button
          className="btn btn-outline-secondary"
          type="submit"
          id="button-addon2"
          onClick={submitHandler}
        >
          Найти
        </button>
      </div>
    </div>
  );
};

Search.propTypes = {
  onSearch: PropTypes.func.isRequired
};

export default Search;
