import React, { lazy, Component } from "react";
import { Link } from "react-router-dom";
const SingUpForm = lazy(() => import("../../components/account/SignUpForm"));

class SignUpView extends Component {
  onSubmit = async (values) => {
    alert(JSON.stringify(values));
  };
  render() {
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
            <h4 className="text-center">Đăng ký</h4>
            <SingUpForm onSubmit={this.onSubmit} />
          </div>
        </div>
      </div>
    );
  }
}

export default SignUpView;
