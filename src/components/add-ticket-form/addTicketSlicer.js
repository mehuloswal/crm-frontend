import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  error: "",
  successMsg: "",
};
const newTicketSlice = createSlice({
  name: "newTicket",
  initialState,
  reducers: {
    openNewTicketPending: (state) => {
      state.isLoading = true;
    },
    openNewTicketSuccess: (state, { payload }) => {
      state.isLoading = false;
      state.successMsg = payload;
    },
    openNewTicketFail: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
    resetSuccessMsg: (state) => {
      state.isLoading = false;
      state.successMsg = "";
    },
  },
});
const { reducer, actions } = newTicketSlice;
export const {
  openNewTicketPending,
  openNewTicketSuccess,
  openNewTicketFail,
  resetSuccessMsg,
} = actions;
export default reducer;
