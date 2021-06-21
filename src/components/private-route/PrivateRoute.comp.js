import React, { useEffect } from "react";
import { Route, Redirect } from "react-router-dom";
import { loginSuccess } from "../login/LoginSlice";
import { DefaultLayout } from "../../layout/DefaultLayout";
import { useSelector, useDispatch } from "react-redux";
import { fetchNewAccessJWT } from "../../api/userApi";

export const PrivateRoute = ({ children, ...rest }) => {
  const { isAuth } = useSelector((state) => state.login); //provides whole state. particular can be selected
  const dispatch = useDispatch();
  useEffect(() => {
    const updateAccessJWT = async () => {
      const result = await fetchNewAccessJWT();
      result && dispatch(loginSuccess());
    };

    !sessionStorage.getItem("accessJWT") &&
      localStorage.getItem("CRMWebsite") &&
      updateAccessJWT();
    !isAuth && sessionStorage.getItem("accessJWT") && dispatch(loginSuccess());
  }, [dispatch, isAuth]);
  return (
    <Route
      {...rest}
      render={() =>
        isAuth ? <DefaultLayout>{children}</DefaultLayout> : <Redirect to="/" />
      }
    />
  );
};
