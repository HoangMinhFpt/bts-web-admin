import React from "react";

const FilterPrice = (props) => {
  return (
    <div className="card mb-3">
      <div
        className="card-header fw-bold text-uppercase accordion-icon-button"
        data-bs-toggle="collapse"
        data-bs-target="#filterPrice"
        aria-expanded="true"
        aria-controls="filterPrice"
      >
        Sắp xếp theo
      </div>
      <ul className="list-group list-group-flush show" id="filterPrice">
        <li className="list-group-item">
          <select
            className="form-select mw-360 float-start"
            aria-label="Default select"
          >
            <option value={1}>Phổ biến nhất</option>
            <option value={2}>Tin mới nhất</option>
            <option value={3}>Độ yêu thích</option>
            <option value={4}>Giá từ thấp đến cao</option>
            <option value={4}>Giá từ cao đến thấp</option>
          </select>
        </li>
      </ul>
    </div>
  );
};

export default FilterPrice;
