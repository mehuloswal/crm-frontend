import React from "react";
import PropTypes from "prop-types";
import "./MessageHistory.style.css";

export const MessageHistory = ({ msg }) => {
  if (!msg) {
    return null;
  }
  return msg.map((row, i) => (
    <div key={i} className="message-history mt-3">
      <div className="send text-secondary font-weight-bold">
        <div className="sender" style={{ fontWeight: "bold" }}>
          {row.sender}
        </div>
        <div className="date">
          {row.msgAt && new Date(row.msgAt).toLocaleString()}
        </div>
      </div>
      <div className="message">{row.message}</div>
    </div>
  ));
};
MessageHistory.propTypes = {
  msg: PropTypes.array.isRequired,
};
