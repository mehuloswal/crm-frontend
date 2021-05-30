import React,{useState} from 'react'
import { Container,Row,Col, } from "react-bootstrap"; 
import { BreadCrumb } from '../../components/breadcrumb/BreadCrumb.comp';
import { AddTicketForm } from "../../components/add-ticket-form/AddTicketForm.comp";


const initialFormData={
    subject:"",
    issueDate: "",
    details: "",
};

export const AddTicket = () => {
    const [formData, setformData] = useState(initialFormData);


    const handleOnSubmit=(e)=>{
        e.preventDefault()
        console.log("Form submit request received")
        
    }
    const handleOnChange=(e)=>{
        const{name,value}=e.target
        setformData(
            {
                ...formData,[name]: value
            }
        )
    }
    return (
        <Container>
            <Row>
                <Col>
                <BreadCrumb pageName="New Ticket"/>
                </Col>
            </Row>
            <Row>
                <Col>
                <AddTicketForm handleOnSubmit={handleOnSubmit} handleOnChange={handleOnChange} formData={formData}/>
                </Col>
            </Row>
        </Container>
    )
}

