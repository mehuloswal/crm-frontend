import React from "react";
import "./style.css";
import "../../components/login/Login.comp";
import { ResetPassword } from "../../components/password-reset/password-reset.comp";
import { UpdatePasswordForm } from "../../components/password-reset/UpdatepasswordForm";
import { useSelector } from "react-redux";

export const PasswordReset = () => {
  const { showOtpForm } = useSelector((state) => state.passwordReset);
  return (
    <div className="entry-page bg-info">
      <div className="bg-light jumbotron m-3 form-box">
        {showOtpForm ? <UpdatePasswordForm /> : <ResetPassword />}
      </div>
    </div>
  );
};
