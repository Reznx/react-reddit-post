import React, { useState } from "react";
import PropTypes from "prop-types";

const Search = ({ onSearch }) => {
  const [value, setValue] = useState("");

  const submitHandler = e => {
    e.preventDefault();

    if (value.trim()) {
      onSearch(value);
      setValue("");
    }
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
        onChange={e => setValue(e.target.value)}
        value={value}
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
