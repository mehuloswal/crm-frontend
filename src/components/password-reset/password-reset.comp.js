import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  Alert,
  Spinner,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { sendPasswordResetOtp } from "./passwordActions";
export const ResetPassword = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const { isLoading, status, message } = useSelector(
    (state) => state.passwordReset
  );
  const handleOnResetSubmit = (e) => {
    e.preventDefault();
    dispatch(sendPasswordResetOtp(email));
  };
  const handleOnChange = (e) => {
    const { value } = e.target;
    setEmail(value);
  };
  return (
    <Container>
      <Row>
        <Col>
          <h1 className="text-center" style={{ color: "#1e7994" }}>
            Reset Password
          </h1>
          <hr />
          {message && (
            <Alert variant={status === "success" ? "success" : "danger"}>
              {message}
            </Alert>
          )}
          {isLoading && <Spinner variant="primary" animation="border" />}
          <Form onSubmit={handleOnResetSubmit}>
            <Form.Group>
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type="email"
                name="email"
                onChange={handleOnChange}
                value={email}
                placeholder="Enter email"
                required
              />
            </Form.Group>

            <Button type="submit" className="mt-4">
              {" "}
              Reset Password{" "}
            </Button>
          </Form>
          <hr />
        </Col>
      </Row>
      <Row>
        <Col>
          <a href="/" className="text-decoration-none">
            Login Now?
          </a>
        </Col>
      </Row>
    </Container>
  );
};
