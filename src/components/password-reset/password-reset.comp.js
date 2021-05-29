
import React from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import PropTypes from 'prop-types'

export const ResetPassword = ({handleOnChange,formSwitcher,handleOnResetSubmit,email}) => {
    return (
        <Container>
            <Row>
                <Col>
                    <h1 className="text-center" style={{color:"#1e7994"}}>Reset Password</h1>
                    <hr />
                    <Form onSubmit={handleOnResetSubmit}>
                        <Form.Group>
                            <Form.Label>Email Address</Form.Label>
                            <Form.Control type="email" name="email" onChange={handleOnChange} value={email}   placeholder="Enter email" required />
                        </Form.Group>
                        

                        <Button type="submit" className="mt-4" > Reset Password </Button>
                    </Form>
                    <hr />
                </Col>
            </Row>
            <Row>
                <Col>
                <a href="#!" onClick={()=>formSwitcher('login')} className="text-decoration-none">Login Now?</a>
                </Col>
            </Row>

        </Container>
    )
}
ResetPassword.propTypes={
    handleOnChange: PropTypes.func.isRequired,
    handleOnResetSubmit: PropTypes.func.isRequired,
    formSwitcher: PropTypes.func.isRequired,
    email: PropTypes.string.isRequired,
    
}
