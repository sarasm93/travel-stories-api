import React, { useState } from "react";
import { Link } from "react-router-dom";

import styles from "../../styles/SignUpInForm.module.css";
import btnStyles from "../../styles/Button.module.css";
import appStyles from "../../App.module.css";

import { Form, Button, Image, Col, Row, Container, Alert } from "react-bootstrap";


const SignUpForm = () => {

    const [errors, setErrors] = useState({});

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
                                placeholder="Enter username"
                                name="username"
                            />
                        </Form.Group>
                        {errors.username?.map((message, idx) => (
                        <Alert variant="warning" key={idx}>
                            {message}
                        </Alert>
                        ))}
                        <Form.Group controlId="password1">
                            <Form.Label className="d-none">Password:</Form.Label>
                            <Form.Control
                                className={styles.Input}
                                type="password"
                                placeholder="Enter password"
                                name="password1"
                            />
                        </Form.Group>
                        {errors.password1?.map((message, idx) => (
                        <Alert variant="warning" key={idx}>
                            {message}
                        </Alert>
                        ))}
                        <Form.Group controlId="password2">
                            <Form.Label className="d-none">Confirm the password:</Form.Label>
                            <Form.Control
                                className={styles.Input}
                                type="password"
                                placeholder="Repeat password"
                                name="password2"
                            />
                        </Form.Group>
                        {errors.password2?.map((message, idx) => (
                        <Alert variant="warning" key={idx}>
                            {message}
                        </Alert>
                        ))}
                        <div className="text-center">
                            <Button
                                className={`${btnStyles.Button} ${btnStyles.Wide} ${btnStyles.Bright}`}
                                type="submit"
                            >
                                Sign up
                            </Button>
                            {errors.non_field_errors?.map((message, idx) => (
                            <Alert key={idx} variant="warning" className="mt-3">
                                {message}
                            </Alert>
                            ))}
                        </div>
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