import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as IconPersonBadgeFill } from "bootstrap-icons/icons/person-badge-fill.svg";
import { ReactComponent as IconStarFill } from "bootstrap-icons/icons/star-fill.svg";
import { ReactComponent as IconListCheck } from "bootstrap-icons/icons/list-check.svg";
import { ReactComponent as IconDoorClosedFill } from "bootstrap-icons/icons/door-closed-fill.svg";
import { ReactComponent as IconHeartFill } from "bootstrap-icons/icons/heart-fill.svg";
import { ReactComponent as IconBellFill } from "bootstrap-icons/icons/bell-fill.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FaRegCommentDots } from "react-icons/fa";
// import Dropdown from 'react-bootstrap/Dropdown';
import { Button } from "react-bootstrap";


const Header = () => {
  return (
    <React.Fragment>
      <header>
        <div className="container-fluid">
          <div className="row g-3">
            <div className="col-md-1 text-center">
              <Link to="/">
                <img
                  alt="logo"
                  src="../../images/bird.png"
                  width="50"
                  height="50"
                />
              </Link>
            </div>
            <div className="col-md-8">
              {/* <Search /> */}
            </div>
            <div className="col-md-1">
              <div className="btn-group">
                <button
                  type="button"
                  className="btn btn-secondary rounded-circle border me-3"
                  data-toggle="dropdown"
                  aria-expanded="false"
                  aria-label="Profile"
                  data-bs-toggle="dropdown"
                >
                  <FontAwesomeIcon icon={faUser} className="text-light" />
                </button>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to="/account/profile">
                      <IconPersonBadgeFill /> Cài đặt tài khoản
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/account/orders">
                      <IconListCheck className="text-primary" /> Quản lý tin
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/account/wishlist">
                      <IconHeartFill className="text-danger" /> Tin đăng đang lưu
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/account/chat">
                      <FaRegCommentDots size={18} /> Chat
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/account/notification">
                      <IconBellFill className="text-primary" /> Thông báo
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/">
                      <IconDoorClosedFill className="text-danger" /> Đăng xuất
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-2">
              <Button type="button"
                className="btn btn-warning"
                href="/account/signin">Đăng Nhập
              </Button>
            </div>
          </div>
        </div>
      </header>
    </React.Fragment>
  );
};
export default Header;
