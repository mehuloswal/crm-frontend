
import React from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import PropTypes from 'prop-types'

export const LoginForm = ({handleOnChange,handleOnSubmit,formSwitcher,email,pass}) => {
    return (
        <Container>
            <Row>
                <Col>
                    <h1 className="text-center" style={{color:"#1e7994"}}>Client Login</h1>
                    <hr />
                    <Form onSubmit={handleOnSubmit}>
                        <Form.Group>
                            <Form.Label>Email Address</Form.Label>
                            <Form.Control type="email" name="email" onChange={handleOnChange} value={email}   placeholder="Enter email" required />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label className="mt-3">Password</Form.Label>
                            <Form.Control type="password" name="password" onChange={handleOnChange} value={pass}  placeholder="Enter password" required />
                        </Form.Group>

                        <Button type="submit" className="mt-4" > Login </Button>
                    </Form>
                    <hr />
                </Col>
            </Row>
            <Row>
                <Col>
                <a href="#!" onClick={()=>formSwitcher('reset')} className="text-decoration-none">Forgot Password?</a>
                </Col>
            </Row>

        </Container>
    )
}
LoginForm.propTypes={
    handleOnChange: PropTypes.func.isRequired,
    handleOnSubmit: PropTypes.func.isRequired,
    formSwitcher: PropTypes.func.isRequired,
    email: PropTypes.string.isRequired,
    pass: PropTypes.string.isRequired,
}
