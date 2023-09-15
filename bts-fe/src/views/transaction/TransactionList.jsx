import axios from "axios";
import React, { lazy, useEffect, useState, } from "react";
import { data } from "../../data";
const Paging = lazy(() => import("../../components/Paging"));
const CardTransactionList = lazy(() =>
  import("../../components/card/CardTransactionList")
);

function TransactionListView() {

  const [currentTransactions, setCurrentTransactions] = useState([]);
  const [currentPage, setCurrentPage] = useState(null);
  const [totalPages, setTotalPages] = useState(null);
  const [totalItems, setTotalItems] = useState(0);
  const [view] = useState("list");
  const [transactionList, setTransactionList] = useState([]);

  useEffect(() => {
    const totalItems = getTransactions().length;
    setTotalItems(totalItems);
    axios.get("https://localhost:44331/api/v1/BirdCategory/getAll")
      .then(res => {
        setTransactionList(res.data);
      })
  }, [setTransactionList]);

  const onPageChanged = (page) => {
    let transactions = getTransactions();
    const { currentPage, totalPages, pageLimit } = page;
    const offset = (currentPage) * pageLimit;
    const currentTransactions = transactions.slice(offset, offset + pageLimit);

    setCurrentPage(currentPage);
    setCurrentTransactions(currentTransactions);
    setTotalPages(totalPages);
  };

  const getTransactions = () => {
    let transactions = data.transactions;
    return transactions;
  };

  return (
    <React.Fragment>
      <div className="container text-center">
        <span className="display-5 px-3 bg-white rounded shadow">
          Giao Dịch
        </span>
      </div>
      <div className="container-fluid mb-3 justify-content-center">
        <div className="row">
          <div className="mt-3">
            <table class="table table-bordered table-striped">
              <thead>
                <tr className="text-center">
                  <th className="col-1 text-center">STT</th>
                  <th className="col-3">Tên</th>
                  <th className="col-1">Rút tiền</th>
                  <th className="col-2 text-center">Số tiền rút</th>
                  <th className="d-grid">Thao Tác</th>
                </tr>
              </thead>
            </table>
            {currentTransactions.map((transaction) => {
              return (
                <CardTransactionList data={transaction} />
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


export default TransactionListView;
