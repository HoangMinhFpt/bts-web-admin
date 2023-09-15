import axios from "axios";
import React, { lazy, useState, useEffect } from "react";
import { data } from "../../data";
const Paging = lazy(() => import("../../components/Paging"));
const CardAccountList = lazy(() =>
  import("../../components/card/CardAccountList")
);

function AccountListView() {

  const [currentAccounts, setCurrentAccount] = useState([]);
  const [currentPage, setCurrentPage] = useState(null);
  const [totalPages, setTotalPages] = useState(null);
  const [totalItems, setTotalItems] = useState(0);
  const [accountList, setAccountList] = useState([]);

  useEffect(() => {
    const totalItems = getAccounts().length;
    setTotalItems(totalItems);
    axios.get("https://localhost:44331/api/v1/BirdCategory/getAll")
      .then(res => {
        setAccountList(res.data);
      })
  }, [setAccountList]);

  const onPageChanged = (page) => {
    let accounts = getAccounts();
    const { currentPage, totalPages, pageLimit } = page;
    const offset = (currentPage) * pageLimit;
    const currentAccounts = accounts.slice(offset, offset + pageLimit);

    setCurrentPage(currentPage);
    setCurrentAccount(currentAccounts);
    setTotalPages(totalPages);
  };

  const getAccounts = () => {
    let accounts = data.accounts;
    return accounts;
  };

  return (
    <React.Fragment>
      <div className="container text-center">
        <span className="display-5 px-3 bg-white rounded shadow">
          Tài Khoản
        </span>
      </div>
      <div className="container-fluid justify-content-center">
        <div className="row">
          <div className="mt-3">
            <table class="table table-bordered table-striped">
              <thead>
                <tr className="text-center">
                  <th className="col-1 text-center">STT</th>
                  <th className="col-3">Tên</th>
                  <th className="col-3">Địa Chỉ</th>
                  <th className="col-1 text-center">Ngày Sinh</th>
                  <th className="col-1 text-center">Giới Tính</th>
                  <th className="d-grid">Thao Tác</th>
                </tr>
              </thead>
            </table>
            {currentAccounts.map((account) => {
              return (
                <CardAccountList data={account} />
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
    </React.Fragment >
  );
}

export default AccountListView;
