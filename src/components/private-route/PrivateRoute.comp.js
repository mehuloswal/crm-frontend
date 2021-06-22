import React, { useEffect } from "react";
import { Route, Redirect } from "react-router-dom";
import { loginSuccess } from "../login/LoginSlice";
import { DefaultLayout } from "../../layout/DefaultLayout";
import { useSelector, useDispatch } from "react-redux";
import { fetchNewAccessJWT } from "../../api/userApi";
import { getUserProfile } from "../../pages/dashboard/userAction";

export const PrivateRoute = ({ children, ...rest }) => {
  const { isAuth } = useSelector((state) => state.login); //provides whole state. particular can be selected
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  useEffect(() => {
    const updateAccessJWT = async () => {
      const result = await fetchNewAccessJWT();
      result && dispatch(loginSuccess());
    };

    !user._id && dispatch(getUserProfile());

    !sessionStorage.getItem("accessJWT") &&
      localStorage.getItem("CRMWebsite") &&
      updateAccessJWT();
    !isAuth && sessionStorage.getItem("accessJWT") && dispatch(loginSuccess());
  }, [dispatch, isAuth, user._id]);
  return (
    <Route
      {...rest}
      render={() =>
        isAuth ? <DefaultLayout>{children}</DefaultLayout> : <Redirect to="/" />
      }
    />
  );
};
