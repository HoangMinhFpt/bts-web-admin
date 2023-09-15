import React from "react";
import { ReactComponent as IconCreditCard2FrontFill } from "bootstrap-icons/icons/credit-card-2-front-fill.svg";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faPlus } from "@fortawesome/free-solid-svg-icons";
import ModalDeposite from "../modal/ModalDeposite";
const CardListForm = () => {
  return (
    <div className="card border-success">
      <h6 className="card-header">
        <IconCreditCard2FrontFill className="text-success" /> Giao dịch
        <ModalDeposite data="abc" class="offset-md-9"/>
      </h6>
      <table class="table table-bordered text-center">
        <thead>
          <tr className="text-center">
            <th className="col-1 text-center">STT</th>
            <th className="col-3">Ngày giao dịch</th>
            <th className="col-1">Yêu cầu</th>
            <th className="col-3 text-center">Số tiền yêu cầu</th>
            <th className="col-5">Số dư</th>
          </tr>
        </thead>
        <tbody> 
          <tr>
            <td className="col-1 text-center">abc</td>
            <td className="col-3">
              {/* <Link to={{
                pathname: `/account/Profile/${account.id}`,
                state: "Hello",
                }} className="text-decoration-none fs-5">
              {account.name}
            </Link> */}
              abc
            </td>
            <td className="col-1">
              {
                (() => {
                  switch (1) {
                    case 0:
                      return <span>
                        Nạp tiền
                      </span>;
                    default:
                      return <span>
                        Rút tiền
                      </span>;
                  }
                })()
              }
            </td>
            <td className="col-3 text-center">abcd</td>
            <td className="col-5 text-center">abc</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CardListForm;
