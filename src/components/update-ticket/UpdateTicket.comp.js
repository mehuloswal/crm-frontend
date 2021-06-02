import React from 'react'
import { Form, Button } from 'react-bootstrap'
import PropTypes from 'prop-types'

export const UpdateTicket = ({msg,handleOnChange,handleOnSubmit}) => {
    return (
        <Form onSubmit={handleOnSubmit}>
            
            <Form.Label>Reply</Form.Label>
            <div></div>
            <Form.Text>Please reply your message here or update the ticket</Form.Text>
            <Form.Control name="detail" as="textarea" row="5" value={msg} onChange={handleOnChange}/>
            <div style={{textAlign:"right"}} className="mt-3 mb-3">
                <Button variant="info" type="submit" className="text-white" >Reply</Button>
            </div>

        </Form>
    )
}
UpdateTicket.propTypes={
    handleOnChange:PropTypes.func.isRequired,
    handleOnSubmit:PropTypes.func.isRequired,
    msg:PropTypes.string.isRequired,
}
