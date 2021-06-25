import React, { useState, useEffect } from "react";
import { Form, Button, Row, Col, Spinner, Alert } from "react-bootstrap";
import "./AddTicketForm.style.css";
import { useDispatch, useSelector } from "react-redux";
import { openNewTicket } from "./addTicketActions";
import { resetSuccessMsg } from "./addTicketSlicer";

const initialFormData = {
  subject: "",
  issueDate: "",
  message: "",
};
export const AddTicketForm = () => {
  const dispatch = useDispatch();
  const {
    user: { name },
  } = useSelector((state) => state.user);
  const { isLoading, error, successMsg } = useSelector(
    (state) => state.newTicket
  );
  const [formData, setformData] = useState(initialFormData);
  useEffect(() => {
    return () => {
      successMsg && dispatch(resetSuccessMsg());
    };
  }, [dispatch, successMsg]);

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setformData({
      ...formData,
      [name]: value,
    });
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    dispatch(openNewTicket({ ...formData, sender: name }));
  };
  return (
    <div className="jumbotron mt-sm-5 bg-light">
      <h1 className="text-center" style={{ color: "#1e7994" }}>
        Add New Ticket
      </h1>
      <hr className="mb-4" />
      <div>
        {error && <Alert variant="danger">{error}</Alert>}
        {successMsg && <Alert variant="success">{successMsg}</Alert>}
        {isLoading && <Spinner variant="primary" animation="border" />}
      </div>
      <Form onSubmit={handleOnSubmit}>
        <Form.Group as={Row}>
          <Form.Label column sm={3}>
            Subject
          </Form.Label>
          <Col sm={9}>
            <Form.Control
              name="subject"
              minLength="3"
              value={formData.subject}
              onChange={handleOnChange}
              placeholder="Subject"
              required
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row}>
          <Form.Label column sm={3} className="mt-4">
            Issue Found
          </Form.Label>
          <Col sm={9} className="mt-sm-4">
            <Form.Control
              type="date"
              name="issueDate"
              value={formData.issueDate}
              onChange={handleOnChange}
              placeholder="Enter password"
              required
            />
          </Col>
        </Form.Group>

        <Form.Group>
          <Form.Label className="mt-4">Issue Details</Form.Label>
          <Form.Control
            as="textarea"
            rows="5"
            name="message"
            value={formData.message}
            onChange={handleOnChange}
            placeholder="Enter Details here"
            required
          />
        </Form.Group>
        <div className="btn-div">
          <Button
            type="submit"
            className=" mt-4 btn-prop text-white"
            variant="info"
            size="lg"
            block
          >
            {" "}
            Submit{" "}
          </Button>
        </div>
      </Form>
    </div>
  );
};
// AddTicketForm.propTypes = {
//   handleOnSubmit: PropTypes.func.isRequired,
//   handleOnChange: PropTypes.func.isRequired,
//   formData: PropTypes.object.isRequired,
//   formDataError: PropTypes.object.isRequired
// };
