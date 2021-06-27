import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  status: "",
  message: "",
  showOtpForm: false,
  email: "",
};

const passwordResetSlice = createSlice({
  name: "passwordReset",
  initialState,
  reducers: {
    otpReqPending: (state) => {
      state.isLoading = true;
    },
    otpReqSuccess: (state, { payload }) => {
      state.isLoading = false;
      state.status = "success";
      state.message = payload.message;
      state.email = payload.email;
      state.showOtpForm = true;
    },
    updatePassSuccess: (state, { payload }) => {
      state.isLoading = false;
      state.status = "success";
      state.message = payload;
      //   state.showOtpForm = false;
    },
    otpReqFail: (state, { payload }) => {
      state.isLoading = false;
      state.status = "error";
      state.message = payload;
    },
  },
});

const { reducer, actions } = passwordResetSlice;
export const { otpReqPending, otpReqSuccess, otpReqFail, updatePassSuccess } =
  actions;
export default reducer;
