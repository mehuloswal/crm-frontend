import {
  registrationPending,
  registrationSuccess,
  registrationError,
} from "./userRegistrationSlice";

import { userRegistration } from "../../api/userApi";

export const newUserRegistration = (frmDt) => async (dispatch) => {
  try {
    dispatch(registrationPending());

    const result = await userRegistration(frmDt);
    console.log(result);
    result.status === "success"
      ? dispatch(registrationSuccess(result.message))
      : dispatch(registrationError(result.message));
  } catch (error) {
    dispatch(registrationError(error.message));
  }
};
