import axios from "axios";
import React, { lazy, useEffect, useState } from "react";
import { data } from "../../data";
import AddBird from "./AddBird";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faTh, faBars } from "@fortawesome/free-solid-svg-icons";
const Paging = lazy(() => import("../../components/Paging"));
const CardBirdList = lazy(() =>
  import("../../components/card/CardBirdList")
);

function BirdListView() {

  const [currentProducts, setCurrentProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(null);
  const [totalPages, setTotalPages] = useState(null);
  const [totalItems, setTotalItems] = useState(0);
  const [view] = useState("list");
  const [birdCategory, setBirdCategory] = useState([]);

  useEffect(() => {
    const totalItems = getProducts().length;
    setTotalItems(totalItems);
    axios.get("https://localhost:44331/api/v1/BirdCategory/getAll")
      .then(res => {
        setBirdCategory(res.data);
      })
  }, [setBirdCategory]);

  const onPageChanged = (page) => {
    let products = getProducts();
    const { currentPage, totalPages, pageLimit } = page;
    const offset = (currentPage) * pageLimit;
    const currentProducts = products.slice(offset, offset + pageLimit);

    setCurrentPage(currentPage);
    setCurrentProducts(currentProducts);
    setTotalPages(totalPages);
  };

  const getProducts = () => {
    let birds = data.birds;
    return birds;
  };

  return (
    <React.Fragment>
      <div className="container text-center">
        <span className="display-5 px-3 bg-white rounded shadow">
          Loại Chim
        </span>
      </div>
      <div className="container-fluid justify-content-center">
        <div className="row">
          <AddBird/>
          <div className="mt-3">
          <table class="table table-bordered table-striped">
              <thead>
                <tr className="text-center">
                  <th className="col-1 text-center">STT</th>
                  <th className="col-5">Tên</th>
                  <th className="d-grid">Thao Tác</th>
                </tr>
              </thead>
            </table>
            {currentProducts.map((bird) => {
              return (
                <CardBirdList data={bird} />
              );
            })}
            <Paging
              totalRecords={totalItems}
              pageLimit={9}
              pageNeighbours={3}
              onPageChanged={onPageChanged}
              sizing=""
              alignment="justify-content-center"
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default BirdListView;
