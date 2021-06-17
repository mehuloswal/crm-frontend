import { getUserError, getUserPending, getUserSuccess } from "./userSlice";
import { fetchUser } from "../../api/userApi";

export const getUserProfile = () => async (dispatch) => {
  try {
    dispatch(getUserPending());
    //calling the api
    const result = await fetchUser();
    if (result.user && result.user._id) {
      return dispatch(getUserSuccess(result.user));
    }
    dispatch(getUserError("User is not found"));
  } catch (error) {
    dispatch(getUserError(error));
  }
};
