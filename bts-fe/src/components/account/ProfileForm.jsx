import React from "react";
import { Field, reduxForm } from "redux-form";
import { compose } from "redux";
import renderFormGroupField from "../../helpers/renderFormGroupField";
import renderFormFileInput from "../../helpers/renderFormFileInput";
import { ReactComponent as IconGearFill } from "bootstrap-icons/icons/gear-fill.svg";
import { ReactComponent as IconPercent } from "bootstrap-icons/icons/percent.svg";
import { ReactComponent as IconEnvelope } from "bootstrap-icons/icons/envelope.svg";
import { ReactComponent as IconTrash } from "bootstrap-icons/icons/trash.svg";
import { ReactComponent as IconBell } from "bootstrap-icons/icons/bell.svg";
import {
  required,
  maxLengthMobileNo,
  minLengthMobileNo,
  digit,
  name,
  email,
} from "../../helpers/validation";
import { ReactComponent as IconPerson } from "bootstrap-icons/icons/person.svg";
import { ReactComponent as IconPhone } from "bootstrap-icons/icons/phone.svg";
import { ReactComponent as IconEnvelop } from "bootstrap-icons/icons/envelope.svg";
import { ReactComponent as IconGeoAlt } from "bootstrap-icons/icons/geo-alt.svg";
import { ReactComponent as IconCalendarEvent } from "bootstrap-icons/icons/calendar-event.svg";
import { ReactComponent as IconPersonSquareFill } from "bootstrap-icons/icons/person-lines-fill.svg";
import { useParams } from "react-router-dom";

const ProfileForm = (props) => {
  const { name } = useParams();
  const {
    handleSubmit,
    submitting,
    onSubmit,
    submitFailed,
    onImageChange,
    imagePreview,
  } = props;
  //const account = props.value;
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={`needs-validation ${submitFailed ? "was-validated" : ""}`}
      noValidate
    >
      <div className="card border-primary">
        <h6 className="card-header">
          <IconPersonSquareFill /> Profile Detail
        </h6>
        <img
          src={imagePreview ? imagePreview : "../../images/NO_IMG.png"}
          alt=""
          className="card-img-top rounded-0 img-fluid bg-secondary"
        />
        <div className="card-body">
          <Field
            name="formFile"
            component={renderFormFileInput}
            onImageChange={onImageChange}
            validate={[required]}
            tips="You don't allow uploading a photo more than 5MB"
          />
          <p className="card-text">
            With supporting text below as a natural lead-in to additional
            content.
          </p>
        </div>
        {/* <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <Field
              name="name"
              type="text"
              component={renderFormGroupField}
              placeholder="Your name"
              icon={IconPerson}
              validate={[required, name]}
              required={true}
            />
          </li>
          <li className="list-group-item">
            <Field
              name="mobileNo"
              type="number"
              component={renderFormGroupField}
              placeholder="Mobile no without country code"
              icon={IconPhone}
              validate={[required, maxLengthMobileNo, minLengthMobileNo, digit]}
              required={true}
              max="999999999999999"
              min="9999"
            />
          </li>
          <li className="list-group-item">
            <Field
              name="email"
              type="email"
              component={renderFormGroupField}
              placeholder="Your email"
              icon={IconEnvelop}
              validate={[required, email]}
              required={true}
            />
          </li>
          <li className="list-group-item">
            <Field
              name="location"
              type="text"
              component={renderFormGroupField}
              placeholder="Your location"
              icon={IconGeoAlt}
              validate={[required]}
              required={true}
            />
          </li>
          <li className="list-group-item">
            <Field
              name="dob"
              type="date"
              component={renderFormGroupField}
              placeholder="Your birthdate"
              icon={IconCalendarEvent}
              validate={[required]}
              required={true}
            />
          </li>
        </ul> */}
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <IconBell /> Notification
            <div className="form-check form-switch float-end">
              <input className="form-check-input" type="checkbox" />
            </div>
          </li>
          <li className="list-group-item">
            <IconEnvelope /> E-Mail and SMS
            <div className="form-check form-switch float-end">
              <input className="form-check-input" type="checkbox" />
            </div>
          </li>
          <li className="list-group-item">
            <IconPercent /> Promotional offers E-Mail and SMS
            <div className="form-check form-switch float-end">
              <input className="form-check-input" type="checkbox" disabled />
            </div>
          </li>
          <li className="list-group-item bg-danger text-white">
            <IconTrash /> Delete Account{" "}
            <button type="button" className="btn btn-sm btn-light ms-3">
              Submit
            </button>
          </li>
        </ul>
        <div className="card-body">
          <button
            type="submit"
            className="btn btn-primary  d-flex"
            disabled={submitting}
          >
            Submit
          </button>
        </div>
      </div>
    </form>
  );
};

export default compose(
  reduxForm({
    form: "profile",
  })
)(ProfileForm);
