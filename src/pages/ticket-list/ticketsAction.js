import {
  fetchTicketFail,
  fetchTicketLoading,
  fetchTicketSuccess,
  fetchSingleTicketFail,
  fetchSingleTicketLoading,
  fetchSingleTicketSuccess,
  replyTicketFail,
  replyTicketLoading,
  replyTicketSuccess,
  closeTicketFail,
  closeTicketLoading,
  closeTicketSuccess,
  searchTickets,
} from "./ticketsSlice";

import {
  getAllTickets,
  getSingleTicket,
  updateReplyTicket,
  updateTicketStatusClosed,
} from "../../api/ticketApi";

export const fetchAllTickets = () => async (dispatch) => {
  dispatch(fetchTicketLoading());
  //fetch data from api
  try {
    const result = await getAllTickets();

    dispatch(fetchTicketSuccess(result.data.result));
  } catch (error) {
    dispatch(fetchTicketFail(error.message));
  }
};
export const filterSearchTicket = (str) => (dispatch) => {
  dispatch(searchTickets(str));
};

//for fetching single ticket
export const fetchSingleTicket = (_id) => async (dispatch) => {
  dispatch(fetchSingleTicketLoading());
  // //fetch data from api
  try {
    const result = await getSingleTicket(_id);
    dispatch(
      fetchSingleTicketSuccess(
        result.data.result.length && result.data.result[0]
      )
    );
  } catch (error) {
    dispatch(fetchSingleTicketFail(error.message));
  }
};
//for replying on single ticket
export const replyOnTicket = (_id, msgObj) => async (dispatch) => {
  dispatch(replyTicketLoading());
  // //fetch data from api
  try {
    const result = await updateReplyTicket(_id, msgObj);
    if (result.status === "error") {
      return dispatch(replyTicketFail(result.message));
    }
    dispatch(fetchSingleTicket(_id));
    dispatch(replyTicketSuccess(result.message));
  } catch (error) {
    dispatch(replyTicketFail(error.message));
  }
};
//for closing ticket
export const closeTicket = (_id) => async (dispatch) => {
  dispatch(closeTicketLoading());
  // //fetch data from api
  try {
    const result = await updateTicketStatusClosed(_id);
    if (result.status === "error") {
      return dispatch(closeTicketFail(result.message));
    }
    dispatch(fetchSingleTicket(_id));
    dispatch(closeTicketSuccess(result.message));
  } catch (error) {
    dispatch(closeTicketFail(error.message));
  }
};
