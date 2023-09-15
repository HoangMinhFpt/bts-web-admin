import React from "react";
import { ReactComponent as IconTruckFill } from "bootstrap-icons/icons/truck.svg";
import { ReactComponent as IconLifePreserverFill } from "bootstrap-icons/icons/life-preserver.svg";
import { ReactComponent as IconArrowCounterclockwiseFill } from "bootstrap-icons/icons/arrow-counterclockwise.svg";

const CardServices = (props) => {
  return (
    <div className="card mb-3">
      <div className="card-header fw-bold text-uppercase">
        Dịch vụ khách hàng
      </div>
      <div className="card-body">
        <div className="row border-bottom py-3">
          <div className="col-2">
            <IconLifePreserverFill width={40} height={40} />
          </div>
          <div className="col">
            <div className="ms-3">
              <span className="fw-bold">Hỗ trợ 24/7</span>
              <p className="text-muted small m-0">Online 24/24</p>
            </div>
          </div>
        </div>
        <div className="row pt-3">
          <div className="col-2">
            <IconArrowCounterclockwiseFill width={40} height={40} />
          </div>
          <div className="col">
            <div className="ms-3">
              <span className="fw-bold">Miễn phí đăng tin</span>
              <p className="text-muted small m-0">Đăng tin thoả mái</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardServices;
