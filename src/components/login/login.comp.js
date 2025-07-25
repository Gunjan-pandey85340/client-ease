import React from "react";
import PropTypes from "prop-types";
import {Container,Row,Col,Form,Button} from 'react-bootstrap';

export const LoginForm = ({handleOnChange,email,pass}) => {
    return (
        <Container>
            <Row>
                <Col>
                <h1 className="text-info tect-center">Client Login</h1>
                <hr />
                <form>
                    <Form.Group>
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control
                        type="email"
                        name="email"
                        value ={email}
                        onChange={handleonchange}
                        placeholder="Enter Email"
                        required />
                    </Form.Group>
                    <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        name="password"
                        value={pass}
                        onChange={handleonchange}
                        placeholder="Enter Password"
                        required
                    />
                    </Form.Group>
                    <Button type="submit">Login</Button>
                </form>
                <hr />
                </Col>
            </Row>
            <Row>
                <Col>
                <a href="#!">Forget Password</a>
                </Col>
            </Row>
        </Container>


    )
}

LoginForm.PropTypes = {
    handleOnChange:PropTypes.func.isRequired,
    email:PropTypes.string.isRequired,
    pass:PropTypes.string.isRequired
}