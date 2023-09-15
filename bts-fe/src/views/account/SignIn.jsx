import React, { lazy} from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
const SignInForm = lazy(() => import("../../components/account/SignInForm"));

function SignInView() {

  const naviagate = useNavigate();

  const onSubmit = async (values) => {
    console.log(values);
    const account = {
      phoneNumber: values.phoneNumber,
      password: values.password
    }
    axios.post(`https://localhost:44331/api/v1/Auth/login`, account)
      .then(res => {
        if (res.data) {
          alert("Đăng nhập thành công!!!");
          localStorage.setItem("account", JSON.stringify(res.data));
          const role = res.data.role;
          if (role === 1)
            naviagate('/admin');
        }
      })
    alert(JSON.stringify(values));
  };

  return (
    <div className="container my-3">
      <div className="row border">
        <div className="col-md-6 bg-light bg-gradient p-3 d-none d-md-block">
          <Link to="/">
            <img
              src="../../images/banner/bird-home.jpg"
              alt="..."
              className="img-fluid"
            />
          </Link>
        </div>
        <div className="col-md-6 p-3">
          <h4 className="text-center">Đăng nhập</h4>
          <SignInForm onSubmit={onSubmit} />
        </div>
      </div>
    </div>
  );
}


export default SignInView;
