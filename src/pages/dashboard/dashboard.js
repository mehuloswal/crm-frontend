import React from 'react'
import { Container,Row,Col, Button } from 'react-bootstrap'
import { TicketTable } from '../../components/ticket-table/TicketTable.comp'
import tickets from '../../assets/data/dummy-ticket.json'
import { BreadCrumb } from '../../components/breadcrumb/BreadCrumb.comp'

export const Dashboard = () => {
    return (
        <div>
            <Container>
                <Row>
                    <Col>
                    <BreadCrumb pageName="Dashboard"/>
                    </Col>
                </Row>

                <Row>
                    <Col className="text-center mt-5 mb-2">
                        <Button variant="info" style={{fontSize:'2rem', padding:'10px 30px', color:'white'}}>Add New Ticket</Button>
                    </Col>
                </Row>
                <Row>
                    <Col className="text-center mb-2">
                        <div>Total tickets: 50</div>
                        <div>Pending tickets: 5</div>
                    </Col>
                </Row>
                <Row className="mb-1">
                    <Col className="mt-3">
                        <h4>Recently added Tickets:</h4>
                    </Col>
                </Row>
                <Row>
                    <Col className="recent-ticket">
                        <TicketTable tickets={tickets}/>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
