import React, { useState } from "react";

const Search = () => {
  const [term, setTerm] = useState("");

  return (
    <div className="m-2">
      <div className="input-group mb-2">
        <div className="input-group-prepend">
          <div className="input-group-text">r/</div>
        </div>
        <input
          type="text"
          className="form-control"
          name="search"
          onChange={event => this.search(event.target.value)}
          value={term}
          placeholder="введите название сабреддита"
        />
      </div>
    </div>
  );
};

export default Search;
