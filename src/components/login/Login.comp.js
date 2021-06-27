import React, { useState, useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  Spinner,
  Alert,
} from "react-bootstrap";
import PropTypes from "prop-types";
import { loginPending, loginFail, loginSuccess } from "./LoginSlice";
import { getUserProfile } from "../../pages/dashboard/userAction";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { userLogin } from "../../api/userApi";

export const LoginForm = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { isLoading, isAuth, error } = useSelector((state) => state.login);
  useEffect(() => {
    sessionStorage.getItem("accessJWT") && history.push("/dashboard");
  }, [history, isAuth]);
  const [email, setemail] = useState("mehuloswal21@gmail.com");
  const [password, setpassword] = useState("password");

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "email":
        setemail(value);
        break;
      case "password":
        setpassword(value);
        break;

      default:
        break;
    }
  };
  const handleOnSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      return alert("Fill all the Credentials");
    }
    dispatch(loginPending());
    //TODO call api to submit the form
    try {
      const isAuth = await userLogin({ email, password });
      console.log(isAuth);
      if (isAuth.status === "error") {
        return dispatch(loginFail(isAuth.message));
      }
      dispatch(loginSuccess());
      dispatch(getUserProfile());
      history.push("/dashboard");
    } catch (error) {
      dispatch(loginFail(error.message));
    }
  };

  return (
    <Container>
      <Row>
        <Col>
          <h1 className="text-center" style={{ color: "#1e7994" }}>
            Client Login
          </h1>
          <hr />
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleOnSubmit}>
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
            <Form.Group>
              <Form.Label className="mt-3">Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                onChange={handleOnChange}
                value={password}
                placeholder="Enter password"
                required
              />
            </Form.Group>

            <Button type="submit" className="mt-4">
              {" "}
              Login{" "}
            </Button>
            {isLoading && <Spinner variant="primary" animation="border" />}
          </Form>
          <hr />
        </Col>
      </Row>
      <Row>
        <Col>
          <a href="/password-reset" className="text-decoration-none">
            Forgot Password?
          </a>
        </Col>
      </Row>
      <Row className="py-4">
        <Col>
          Are you new here?{" "}
          <a href="/registration" className="text-decoration-none">
            Register Now
          </a>
        </Col>
      </Row>
    </Container>
  );
};
LoginForm.propTypes = {
  formSwitcher: PropTypes.func.isRequired,
};
