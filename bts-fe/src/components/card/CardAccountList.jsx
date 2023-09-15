import React, { useState } from "react";
import { Link } from "react-router-dom";
//import { ReactComponent as IconStarFill } from "bootstrap-icons/icons/star-fill.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBan } from "@fortawesome/free-solid-svg-icons";
import ModalDeposite from "../modal/ModalDeposite";
import axios from "axios";
//import ProfileForm from "../account/ProfileForm";

const CardAccountList = (props) => {
  const account = props.data;
  const [statusAccount, setStatusAccount] = useState();

  const handleStatus = () => {
    setStatusAccount({
      status: "block"
    })
  }

  const handleBanStatus = (event) => {
    event.preventDefault();
    axios.put("https://localhost:44331/api/v1/Post/update/status/" + account.id, { statusAccount })
  }
  return (
    <table class="table table-bordered text-center">
      <tbody>
        <tr>
          <td className="col-1 text-center">{account.id}</td>
          <td className="col-3">
            {/* <Link to={{
                pathname: `/account/Profile/${account.id}`,
                state: "Hello",
                }} className="text-decoration-none fs-5">
              {account.name}
            </Link> */}
            <Link to={account.link} className="text-decoration-none fs-5"> {account.name} </Link>
          </td>
          <td className="col-3">{account.adress}</td>
          <td className="col-1 text-center">{account.birthday}</td>
          <td className="col-1 text-center">{account.sex}</td>
          <td className="d-grid gap-2 d-md-block ">
            <button
              type="button"
              className="btn btn-danger btn-block col-md-3"
              data-bs-toggle="modal"
              data-bs-target="#modalBan"
              onClick={handleStatus}
              title="Cấm"
            >
              <FontAwesomeIcon icon={faBan} />
            </button>
            <div
              class="modal fade"
              id="modalBan"
              tabindex="-1" role="dialog"
              aria-hidden="true">
              <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title">Xác nhận tài khoản</h5>
                    <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div class="modal-body">
                    Bạn có muốn  <span className="fw-bold text-danger text-decoration-underline text-uppercase">cấm</span> tài khoản này?
                  </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Đóng</button>
                    <button type="submit" class="btn btn-danger" onSubmit={handleBanStatus}>Xác nhận</button>
                  </div>
                </div>
              </div>
            </div>
            <ModalDeposite data={account.id} />
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default CardAccountList;
