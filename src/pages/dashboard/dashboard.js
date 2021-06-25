import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Container, Row, Col, Button } from "react-bootstrap";
import { TicketTable } from "../../components/ticket-table/TicketTable.comp";
import { BreadCrumb } from "../../components/breadcrumb/BreadCrumb.comp";
import { Link } from "react-router-dom";
import { fetchAllTickets } from "../ticket-list/ticketsAction";

export const Dashboard = () => {
  const { tickets } = useSelector((state) => state.tickets);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!tickets.length) {
      dispatch(fetchAllTickets());
    }
  }, [tickets, dispatch]);

  const pendingTickets = tickets.filter((row) => row.status !== "Closed");

  const totalTickets = tickets.length;

  return (
    <div>
      <Container>
        <Row>
          <Col>
            <BreadCrumb pageName="Dashboard" />
          </Col>
        </Row>

        <Row>
          <Col className="text-center mt-5 mb-2">
            <Link to="/add-ticket">
              <Button
                variant="info"
                style={{
                  fontSize: "2rem",
                  padding: "10px 30px",
                  color: "white",
                }}
              >
                Add New Ticket
              </Button>
            </Link>
          </Col>
        </Row>
        <Row>
          <Col className="text-center mb-2">
            <div>Total tickets: {totalTickets}</div>
            <div>Pending tickets: {pendingTickets.length}</div>
          </Col>
        </Row>
        <Row className="mb-1">
          <Col className="mt-3">
            <h4>Recently added Tickets:</h4>
          </Col>
        </Row>
        <Row>
          <Col className="recent-ticket">
            <TicketTable tickets={tickets} />
          </Col>
        </Row>
      </Container>
    </div>
  );
};
