import { faCheck, faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Link } from "react-router-dom";
// import { data } from "../../data";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faTh, faBars } from "@fortawesome/free-solid-svg-icons";
// const Paging = lazy(() => import("../../components/Paging"));
// const FilterCategory = lazy(() => import("../../components/filter/CategoryBird"));
// const FilterStar = lazy(() => import("../../components/filter/Star"));
// const FilterClear = lazy(() => import("../../components/filter/Clear"));
// const CardServices = lazy(() => import("../../components/card/CardServices"));
// const CardProductList = lazy(() =>
//   import("../../components/card/CardProductList")
// );

function PostPrice() {

  const [updatePrice, setUpdatePrice] = useState('');
  return (
    <React.Fragment>
      <div className="container text-center">
        <span className="display-5 px-3 bg-white rounded shadow">
          Báo Giá
        </span>
      </div>
      <div className="container my-3 text-center fw-bold offset-2">
        <ul class="list-group list-group-horizontal fs-4 ">
          <li
            class="list-group-item col-3"
            style={{ backgroundColor: "lightblue", color: "white" }}
          >
            Loại tin
          </li>
          <li
            class="list-group-item col-5"
            style={{ backgroundColor: "lightblue", color: "white" }}
          >
            Phí theo ngày(VND)
          </li>
        </ul>
        <ul class="list-group list-group-horizontal">
          <li class="list-group-item col-3">Tin thường</li>
          <li class="list-group-item col-3">
            3.000
          </li>
          <li class="list-group-item col-2">
            <Link onClick={() => handleEdit()}>
              <FontAwesomeIcon icon={faPenToSquare} />
            </Link>
          </li>
        </ul>
        <ul class="list-group list-group-horizontal">
          <li class="list-group-item col-3">Vip 2</li>
          <li class="list-group-item col-3">
            20.000
          </li>
          <li class="list-group-item col-2">
            <Link onClick={handleEdit}>
              <FontAwesomeIcon icon={faPenToSquare} />
            </Link>
          </li>
        </ul>
        <ul class="list-group list-group-horizontal">
          <li class="list-group-item col-3">Vip 1</li>
          <li class="list-group-item col-3">
            30.000
          </li>
          <li class="list-group-item col-2">
            <Link>
              <FontAwesomeIcon icon={faPenToSquare} />
            </Link>
          </li>
        </ul>
        <ul class="list-group list-group-horizontal">
          <li class="list-group-item col-3">Đặc biệt</li>
          <li class="list-group-item col-3">
            50.000
          </li>
          <li class="list-group-item col-2">
            <Link>
              <FontAwesomeIcon icon={faPenToSquare} />
            </Link>
          </li>
        </ul>
      </div>
    </React.Fragment>
  );

  function handleEdit(){
      setUpdatePrice();
  }
}

function EditPrice() {
  return (
      <ul class="list-group list-group-horizontal">
        <li class="list-group-item col-3">Vip 1</li>
        <li class="list-group-item col-3">
          <input type="text"  name="abc" />
        </li>
        <li class="list-group-item col-2">
          <Link>
            <FontAwesomeIcon icon={faCheck} />
          </Link>
        </li>
      </ul>
  );
}

export default PostPrice;
