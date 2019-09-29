import React from "react";

const Pagination = () => {
  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination justify-content-center">
        <li className="page-item">
          <a className="page-link" href="/">
            Previous
          </a>
        </li>
        <li className="page-item disabled">
          <a className="page-link" aria-disabled="true" href="/">
            1
          </a>
        </li>
        <li className="page-item">
          <a className="page-link" href="/">
            Next
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
