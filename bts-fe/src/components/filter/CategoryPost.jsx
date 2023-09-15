import React from "react";
import { Link } from "react-router-dom";

const FilterCategory = (props) => {
  const listOfPost = props.listPost;
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
        <li className="list-group-item">
          <Link to="/" className="text-decoration-none stretched-link">
            Tin thường
          </Link>
        </li>
        <li className="list-group-item">
          <Link to="/" className="text-decoration-none stretched-link">
            Vip 3
          </Link>
        </li>
        <li className="list-group-item">
          <Link to="/" className="text-decoration-none stretched-link">
            Vip 2
          </Link>
        </li>
        <li className="list-group-item">
          <Link to="/" className="text-decoration-none stretched-link">
            Vip 1
          </Link>
        </li>
        <li className="list-group-item">
          <Link to="/" className="text-decoration-none stretched-link">
            Vip đặc biệt
          </Link>
        </li>
        {/* {
          listOfPost.map(post =>
            <li className="list-group-item">
              <Link to="/" className="text-decoration-none stretched-link">
                {post.nameOfBird}
              </Link>
            </li>
          )
        } */}
      </ul>
    </div>
  );
};

export default FilterCategory;
