import React from "react";

const FilterClear = (props) => {
  return (
    <div className="card mb-3">
      <div className="card-body fw-bold text-uppercase">
        Lọc bởi{" "}
        <button type="reset" className="btn btn-sm btn-light">
          <span aria-hidden="true">&times;</span> Xóa tất cả
        </button>
      </div>
    </div>
  );
};

export default FilterClear;
