import React from "react";
import { Link } from "react-router-dom";

const FilterCategory = (props) => {
  const listOfBirdCategory = props.listBirdCategory;
  return (
    <div className="card mb-3 accordion">
      <div
        className="card-header fw-bold text-uppercase accordion-icon-button"
        data-bs-toggle="collapse"
        data-bs-target="#filterCategory"
        aria-expanded="true"
        aria-controls="filterCategory"
      >
        Phân loại
      </div>
      <ul
        className="list-group list-group-flush show"
        id="filterCategory"
      >
        {
          listOfBirdCategory.map(bird =>
            <li className="list-group-item">
              <Link to="/" className="text-decoration-none stretched-link">
                {bird.nameOfBird}
              </Link>
            </li>
          )
        }
      </ul>
    </div>
  );
};

export default FilterCategory;
