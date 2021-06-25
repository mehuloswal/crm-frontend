import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, Row, Col, Button, Spinner, Alert } from "react-bootstrap";
import { BreadCrumb } from "../../components/breadcrumb/BreadCrumb.comp";
import "./Ticket.style.css";
import { MessageHistory } from "../../components/message-history/MessageHistory.comp";
import { UpdateTicket } from "../../components/update-ticket/UpdateTicket.comp";
import { useParams } from "react-router-dom";
import { fetchSingleTicket, closeTicket } from "../ticket-list/ticketsAction";
import { resetResponseMsg } from "../ticket-list/ticketsSlice";

export const Ticket = () => {
  const { isLoading, error, selectedTicket, replyTicketError, replyMsg } =
    useSelector((state) => state.tickets);
  const { tId } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSingleTicket(tId));
    return () => {
      //run during component mount
      (replyMsg || replyTicketError) && dispatch(resetResponseMsg());
    };
  }, [tId, dispatch, replyMsg, replyTicketError]);

  return (
    <Container>
      <Row>
        <Col>
          <BreadCrumb pageName="Ticket" />
        </Col>
      </Row>
      <Row>
        <Col>
          {isLoading && <Spinner variant="primary" animation="border" />}
          {error && <Alert variant="danger">{error}</Alert>}
          {replyTicketError && (
            <Alert variant="danger">{replyTicketError}</Alert>
          )}
          {replyMsg && <Alert variant="success">{replyMsg}</Alert>}
        </Col>
      </Row>

      <Row className="mt-4">
        <Col className="text-weight-bolder text-secondary">
          <div className="subject">
            {" "}
            <b>Subject :</b> {selectedTicket.subject}
          </div>
          <div className="date">
            <b>Ticket Open :</b>{" "}
            {selectedTicket.openedAt &&
              new Date(selectedTicket.openedAt).toLocaleString()}
          </div>
          <div className="status">
            <b>Status :</b> {selectedTicket.status}
          </div>
        </Col>
        <Col className="align-col">
          <div className="col-div">
            <Button
              variant="outline-info"
              className="ps-5 pe-5"
              onClick={() => {
                dispatch(closeTicket(tId));
              }}
              disabled={selectedTicket.status === "Closed"}
            >
              Close Ticket
            </Button>
          </div>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col>
          {selectedTicket.conversations && (
            <MessageHistory msg={selectedTicket.conversations} />
          )}
        </Col>
      </Row>
      <hr className="mt-5" />
      <Row className="mt-4">
        <Col>
          <UpdateTicket _id={tId} />
        </Col>
      </Row>
    </Container>
  );
};
