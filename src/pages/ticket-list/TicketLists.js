
import React, { useState, useEffect } from 'react'
import { Container, Col, Row, Button } from 'react-bootstrap'
import { BreadCrumb } from '../../components/breadcrumb/BreadCrumb.comp'
import { SearchForm } from '../../components/search-form/SearchForm.comp'
import { TicketTable } from '../../components/ticket-table/TicketTable.comp'
import  DummyTicket  from '../../assets/data/dummy-ticket.json'
import './TicketLists.style.css'

export const TicketLists = () => {
    const [str, setstr] = useState("");
    const [displayTickets, setdisplayTickets] = useState(DummyTicket);

    useEffect(() => {
        
     }, [str,displayTickets])

    const handleOnChange = (e) => {
        const {value}=e.target
        setstr(value);
        searchTicket(value)
    }

    const searchTicket= (sttr) =>{
        const displayTickets= DummyTicket.filter((row)=>row.subject.toLowerCase().includes(sttr.toLowerCase()))
        setdisplayTickets(displayTickets)
    }

    return (
        <Container>
            <Row>
                <Col>
                    <BreadCrumb pageName="TicketList"></BreadCrumb>
                </Col>
            </Row>
            <Row className="mt-5">
                <Col>
                    <Button className="add-new-ticket" variant="info">Add New Ticket</Button>
                </Col>
                <Col >
                    <div className="col-div">
                        <SearchForm handleOnChange={handleOnChange} str={str} />
                    </div>

                </Col>
            </Row>
            <hr/>
            <Row>
                <Col>
                   <TicketTable tickets={displayTickets}/>
                </Col>
            </Row>
        </Container>

    )
}
