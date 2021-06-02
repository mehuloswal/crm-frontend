
import React, { useEffect, useState } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import { BreadCrumb } from '../../components/breadcrumb/BreadCrumb.comp';
import dummyTickets from '../../assets/data/dummy-ticket.json'
import './Ticket.style.css'
import { MessageHistory } from '../../components/message-history/MessageHistory.comp';
import { UpdateTicket } from '../../components/update-ticket/UpdateTicket.comp';

const ticket = dummyTickets[0];

export const Ticket = () => {

    const [msg, setMsg] = useState("")
 
    useEffect(() => {
        
    }, [msg])
    const handleOnChange = (e) => {
        setMsg(e.target.value)
    }
    const handleOnSubmit=()=>{

    }

    return (
        <Container >
            <Row>
                <Col>
                    <BreadCrumb pageName="Ticket" />
                </Col>
            </Row>
    
            <Row className="mt-4">
                <Col className="text-weight-bolder text-secondary">
                    <div className="subject" > <b>Subject :</b>  {ticket.subject}</div>
                    <div className="date"><b>Ticket Open :</b> {ticket.addedAt}</div>
                    <div className="status"><b>Status :</b> {ticket.status}</div>
                </Col>
                <Col className="align-col">
                    <div className="col-div">
                        <Button variant="outline-info" className="ps-5 pe-5">Close Ticket</Button>
                    </div>

                </Col>
            </Row>
            <Row className="mt-4">
                <Col>
                <MessageHistory msg={ticket.history}/>
                </Col>
            </Row>
            <hr className="mt-5" />
            <Row className="mt-4">
                <Col>
                <UpdateTicket msg={msg} handleOnChange={handleOnChange} handleOnSubmit={handleOnSubmit}/>
                </Col>
            </Row>
            
            
        </Container>
    )
}
