import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faClipboard, faMoneyBill, faMoneyBill1Wave, faUser } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";

const TopMenu = () => {
  let activeStyle = {
    textDecoration: "none",
    text:"center",
    background: "lightskyblue",
    borderRadius: "7px",
    margin: "5px",
  };
  return (
    <nav class="nav flex-column nav-pills nav-fill bg-dark h-100">
      <h4>
        <NavLink to="/" className="mb-3 d-block text-decoration-none text-white mt-2" style={({ isActive }) =>
          isActive ? activeStyle : undefined
        }>
          <FontAwesomeIcon icon={faMoneyBill1Wave} className="mx-5" />
          Dashboard
        </NavLink>
        <NavLink to="/category" className="mb-3 d-block text-decoration-none text-white mt-2" style={({ isActive })  =>
          isActive ? activeStyle : undefined
        }>
          <FontAwesomeIcon icon={faTwitter} className="mx-5" />
          Loại chim
        </NavLink>
        <NavLink to="/post" className="mb-3 d-block text-decoration-none text-white mt-2" style={({ isActive }) =>
          isActive ? activeStyle : undefined
        }>
          <FontAwesomeIcon icon={faClipboard} className="mx-5" />
          Tin đăng
        </NavLink>
        <NavLink to="/account" className="mb-3 d-block text-decoration-none text-white mt-2" style={({ isActive }) =>
          isActive ? activeStyle : undefined
        }>
          <FontAwesomeIcon icon={faUser} className="mx-5" />
          Tài khoản
        </NavLink>
        <NavLink to="/transaction" className="mb-3 d-block text-decoration-none text-white mt-2" style={({ isActive }) =>
          isActive ? activeStyle : undefined
        }>
          <FontAwesomeIcon icon={faMoneyBill1Wave} className="mx-5" />
          Giao dịch
        </NavLink>
        <NavLink to="/price" className="mb-3 d-block text-decoration-none text-white mt-2" style={({ isActive }) =>
          isActive ? activeStyle : undefined
        }>
          <FontAwesomeIcon icon={faMoneyBill} className="mx-5" />
          Báo giá
        </NavLink>
      </h4>
    </nav>
  );
};

export default TopMenu;
