import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as IconStarFill } from "bootstrap-icons/icons/star-fill.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faBan } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

const CardTransactionList = (props) => {
  const transaction = props.data;
  const [actionTransaction, setActionTransaction] = useState();

  const handleStatus = () => {
    setActionTransaction({
      action:"",
      money: "block"
    })
  }

  const handleAcceptTransaction = (event) => {
    event.preventDefault();
    axios.put("https://localhost:44331/api/v1/Post/update/status/" + transaction.id, { actionTransaction })
  }

  const handleCancelTransaction = (event) => {
    event.preventDefault();
    axios.put("https://localhost:44331/api/v1/Post/update/status/" + transaction.id, { actionTransaction })
  }
  return (
    <table class="table table-bordered text-center">
      <tbody>
        <tr>
          <td className="col-1 text-center">{transaction.id}</td>
          <td className="col-3">
            {/* <Link to={{
                pathname: `/transaction/Profile/${transaction.id}`,
                state: "Hello",
                }} className="text-decoration-none fs-5">
              {transaction.name}
            </Link> */}
            <Link to={transaction.link} className="text-decoration-none fs-5"> {transaction.name} </Link>
          </td>
          <td className="col-1">{transaction.action}</td>
          <td className="col-2 text-center">{transaction.money}</td>
          <td className="d-grid gap-2 d-md-block ">
            <button
              type="button"
              className="btn btn-success btn-block col-md-3"
              data-bs-toggle="modal"
              data-bs-target="#modalCenterAccept"
              onClick={handleStatus}
              title="Chấp nhận"
            >
              <FontAwesomeIcon icon={faCheck} />
            </button>
            <div
              class="modal fade"
              id="modalCenterAccept"
              tabindex="-1" role="dialog"
              aria-hidden="true">
              <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title">Xác nhận yêu cầu</h5>
                    <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div class="modal-body">
                    Bạn có muốn <span className="fw-bold text-success text-decoration-underline text-uppercase">chấp nhận</span> yêu cầu của tài khoản này?
                  </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Đóng</button>
                    <button type="submit" class="btn btn-success" onSubmit={handleAcceptTransaction}>Xác nhận</button>
                  </div>
                </div>
              </div>
            </div>
            <button
              type="button"
              className="btn btn-danger btn-block col-md-3"
              data-bs-toggle="modal"
              data-bs-target="#modalCenterDeny"
              onClick={handleStatus}
              title="Hủy yêu cầu"
            >
              <FontAwesomeIcon icon={faBan} />
            </button>
            <div
              class="modal fade"
              id="modalCenterDeny"
              tabindex="-1" role="dialog"
              aria-hidden="true">
              <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title">Xác nhận yêu cầu</h5>
                    <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div class="modal-body">
                    Bạn có muốn <span className="fw-bold text-danger text-decoration-underline text-uppercase">hủy</span> yêu cầu của tài khoản này?
                  </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Đóng</button>
                    <button type="submit" class="btn btn-danger" onSubmit={handleCancelTransaction}>Xác nhận</button>
                  </div>
                </div>
              </div>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default CardTransactionList;
