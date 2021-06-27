import React, { useEffect, useState } from "react";
import "./style.css";
import { Alert, Spinner } from "react-bootstrap";
import { useParams } from "react-router";
import { userRegistrationVerification } from "../../api/userApi";

const initialResponse = {
  status: "",
  message: "",
};

export const UserVerification = () => {
  const { _id, email } = useParams();
  const data = { _id, email };
  const [response, setResponse] = useState(initialResponse);

  useEffect(() => {
    const apiCall = async () => {
      const result = await userRegistrationVerification(data);
      setResponse(result);
    };
    !response.status && apiCall();
  }, [response]);
  //calling api and send _id to verify user

  return (
    <div className="verification-page bg-info">
      <div className="bg-light jumbotron m-2 form-box">
        {!response.status && <Spinner variant="info" animation="border" />}
        {response.status && (
          <Alert variant={response.status === "success" ? "success" : "danger"}>
            {response.message}
          </Alert>
        )}
      </div>
    </div>
  );
};
