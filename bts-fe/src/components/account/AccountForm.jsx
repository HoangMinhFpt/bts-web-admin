import React from "react";
import { ReactComponent as IconPersonSquareFill } from "bootstrap-icons/icons/person-lines-fill.svg";
import { ReactComponent as IconPercent } from "bootstrap-icons/icons/percent.svg";
import { ReactComponent as IconEnvelope } from "bootstrap-icons/icons/envelope.svg";
import { ReactComponent as IconTrash } from "bootstrap-icons/icons/trash.svg";
import { ReactComponent as IconBell } from "bootstrap-icons/icons/bell.svg";

const AccountForm = () => {
  return (
    <div class="card border-primary mb-3">
      <h5 className="card-header bg-primary text-white">
        <IconPersonSquareFill class="text-white fs-5" /> Hồ sơ
      </h5>
      <div className="row g-0">
        <div className="col-md-2 text-center">
          <img src={"/images/NO_IMG.png"} className="img-fluid" alt="..." />
        </div>
        <div className="col-md-10">
          <div className="card-body">
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <div>
                  <input type="text" class="form-control" placeholder="Tên" aria-label="Name" />
                </div>
              </li>
              <li className="list-group-item">
                <div>
                  <input type="text" class="form-control" placeholder="Số điện thoại" aria-label="Phone" />
                </div>
              </li>
              <li className="list-group-item">
                <div>
                  <input type="text" class="form-control" placeholder="Địa chỉ" aria-label="Address" />
                </div>
              </li>
              <li className="list-group-item">
                <div>
                  <input type="text" class="form-control" placeholder="Số tiền" aria-label="Address" />
                </div>
              </li>
              <li className="list-group-item offset-md-10">
                <button type="button" className="btn btn-sm btn-danger">
                  <IconTrash /> Cấm tài khoản{" "}
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>

    </div>
  );
};

export default AccountForm;
