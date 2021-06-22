import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { replyOnTicket } from "../../pages/ticket-list/ticketsAction";
import PropTypes from "prop-types";

export const UpdateTicket = ({ _id }) => {
  const dispatch = useDispatch();
  const {
    user: { name },
  } = useSelector((state) => state.user);
  const [msg, setMsg] = useState("");

  const handleOnChange = (e) => {
    setMsg(e.target.value);
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    const msgObj = {
      message: msg,
      sender: name,
    };
    dispatch(replyOnTicket(_id, msgObj));
    setMsg("");
  };
  return (
    <div>
      <Form onSubmit={handleOnSubmit}>
        <Form.Label>Reply</Form.Label>
        <div></div>
        <Form.Text>
          Please reply your message here or update the ticket
        </Form.Text>
        <Form.Control
          name="detail"
          as="textarea"
          row="5"
          value={msg}
          onChange={handleOnChange}
        />
        <div style={{ textAlign: "right" }} className="mt-3 mb-3">
          <Button variant="info" type="submit" className="text-white">
            Reply
          </Button>
        </div>
      </Form>
    </div>
  );
};
UpdateTicket.propTypes = {
  _id: PropTypes.string.isRequired,
};
