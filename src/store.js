import { configureStore } from "@reduxjs/toolkit";
import ticketsReducer from "./pages/ticket-list/ticketsSlice";
import loginReducer from "./components/login/LoginSlice";
import userReducer from "./pages/dashboard/userSlice";
import addNewTicketReducer from "./components/add-ticket-form/addTicketSlicer";
const store = configureStore({
  reducer: {
    tickets: ticketsReducer,
    login: loginReducer,
    user: userReducer,
    newTicket: addNewTicketReducer,
  },
});

export default store;
