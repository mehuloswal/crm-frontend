import React, { useEffect } from "react";
import { Container, Col, Row, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { fetchAllTickets } from "./ticketsAction";
import { BreadCrumb } from "../../components/breadcrumb/BreadCrumb.comp";
import { SearchForm } from "../../components/search-form/SearchForm.comp";
import { TicketTable } from "../../components/ticket-table/TicketTable.comp";
import "./TicketLists.style.css";
import { Link } from "react-router-dom";

export const TicketLists = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllTickets());
  }, [dispatch]);

  return (
    <Container>
      <Row>
        <Col>
          <BreadCrumb pageName="TicketList"></BreadCrumb>
        </Col>
      </Row>
      <Row className="mt-5">
        <Col>
          <Link to="/add-ticket">
            <Button className="add-new-ticket text-white" variant="info">
              Add New Ticket
            </Button>
          </Link>
        </Col>
        <Col>
          <div className="col-div">
            <SearchForm />
          </div>
        </Col>
      </Row>
      <hr />
      <Row>
        <Col>
          <TicketTable />
        </Col>
      </Row>
    </Container>
  );
};
