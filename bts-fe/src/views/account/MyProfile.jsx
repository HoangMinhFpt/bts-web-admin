import React, { lazy } from "react";
const AccountForm = lazy(() => import("../../components/account/AccountForm"));
const CardListForm = lazy(() =>
  import("../../components/account/CardListForm")
);

function MyProfileView() {
 const state = { imagePreview: "", isDeleting: false };

  const onSubmitProfile = async (values) => {
    alert(JSON.stringify(values));
  };

  const onSubmitChangePassword = async (values) => {
    alert(JSON.stringify(values));
  };

  const onImageChange = async (obj) => {
    if (obj) {
      const val = await this.getBase64(obj);
      state.setState({ imagePreview: val });
    } else {
      state.setState({ imagePreview: "" });
    }
  };

  const getBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.readAsDataURL(file);
      reader.onerror = (error) => reject(error);
    });
  };
  return (
    <div className="container-fluid my-4">
      <div className="row">
        <div className="col-md-10 mx-5">
          <AccountForm />
          <br></br>
          <CardListForm />
        </div>
        {/* <div className="col-md-8">
          <ProfileForm
            onSubmit={onSubmitProfile}
            onImageChange={onImageChange}
            imagePreview={state.imagePreview}
          />
        </div> */}
      </div>
    </div>
  );
}

export default MyProfileView;
