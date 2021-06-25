import React from 'react'
import { Container, Row, Col, } from "react-bootstrap";
import { BreadCrumb } from '../../components/breadcrumb/BreadCrumb.comp';
import { AddTicketForm } from "../../components/add-ticket-form/AddTicketForm.comp";





export const AddTicket = () => {
    

    
    return (
        <Container>
            <Row>
                <Col>
                    <BreadCrumb pageName="New Ticket" />
                </Col>
            </Row>
            <Row>
                <Col>
                    <AddTicketForm  />
                </Col>
            </Row>
        </Container>
    )
}

