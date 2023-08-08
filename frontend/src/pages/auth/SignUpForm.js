import React from "react";
import { Link } from "react-router-dom";

import styles from "../../styles/SignUpInForm.module.css";
import btnStyles from "../../styles/Button.module.css";
import appStyles from "../../App.module.css";

import { Form, Button, Image, Col, Row, Container } from "react-bootstrap";

const SignUpForm = () => {
    return (
        <Row className={styles.Row}>
            <Col className="m-auto py-2 p-md-2" md={6}>
                <Container className={`${appStyles.Content} p-4 `}>
                    <h1 className={styles.Header}>Sign Up</h1>
                    <Form>
                        <Form.Group controlId="username">
                        <Form.Label className="d-none">Username:</Form.Label>
                            <Form.Control
                                className={styles.Input}
                                type="text"
                                placeholder="Enter a username"
                                name="username"
                            />
                        </Form.Group>
                        <Form.Group controlId="password1">
                            <Form.Label className="d-none">Password:</Form.Label>
                            <Form.Control
                                className={styles.Input}
                                type="password"
                                placeholder="Enter a password"
                                name="password1"
                            />
                        </Form.Group>
                        <Form.Group controlId="password2">
                            <Form.Label className="d-none">Confirm the password:</Form.Label>
                            <Form.Control
                                className={styles.Input}
                                type="password"
                                placeholder="Repeat password"
                                name="password2"
                            />
                        </Form.Group>
                        <Button
                            className={`${btnStyles.Button} ${btnStyles.Wide} ${btnStyles.Bright}`}
                            type="submit"
                        >
                            Sign up
                        </Button>
                    </Form>
                </Container>
                <Container className='mt-3'>
                    <Link className={styles.Link} to="/signin">Already have an account? Sign in<span> here.</span></Link>
                </Container>
            </Col>
        </Row>
  );
};

export default SignUpForm;