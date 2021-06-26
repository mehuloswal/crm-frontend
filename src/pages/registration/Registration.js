import React from "react";
import { RegistrationForm } from "../../components/registration-form/RegistrationForm.comp";
import "./style.css";

export const Registration = () => {
  return (
    <div className="registration-page bg-info">
      <div className="bg-light jumbotron m-2 form-box">
        <RegistrationForm />
      </div>
    </div>
  );
};
