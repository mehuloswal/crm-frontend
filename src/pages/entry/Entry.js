import React, { useState } from "react";
import "./style.css";
import "../../components/login/Login.comp";
import { LoginForm } from "../../components/login/Login.comp";
import { ResetPassword } from "../../components/password-reset/password-reset.comp";

export const Entry = () => {
  const [formLoad, setformLoad] = useState("login");

  const handleOnResetSubmit = (e) => {
    e.preventDefault();
  };
  const formSwitcher = (formType) => {
    setformLoad(formType);
  };

  return (
    <div className="entry-page bg-info">
      <div className="bg-light jumbotron m-3 form-box">
        {formLoad === "login" && <LoginForm formSwitcher={formSwitcher} />}

        {formLoad === "reset" && (
          <ResetPassword
            formSwitcher={formSwitcher}
            handleOnResetSubmit={handleOnResetSubmit}
          />
        )}
      </div>
    </div>
  );
};
