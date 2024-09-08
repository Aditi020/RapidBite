import React, { useRef } from "react";
import Banner from "../components/UI/Banner";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import "../styles/Registeration.css"; 

const Registeration = () => {
    const signupNameRef = useRef();
    const signupPasswordRef = useRef();
    const signupEmailRef = useRef();

    const submitHandler = (e) => {
        e.preventDefault();
    };

    return (
        <div>
            <Banner title="Signup" />
            <section>
                <Container>
                    <Row>
                        <Col lg="6" md="6" sm="12" className="m-auto text-center">
                            <form className="form mb-5" onSubmit={submitHandler}>
                                <div className="form__group">
                                    <input
                                        type="text"
                                        placeholder="Full name"
                                        required
                                        ref={signupNameRef}
                                    />
                                </div>
                                <div className="form__group">
                                    <input
                                        type="email"
                                        placeholder="Email"
                                        required
                                        ref={signupEmailRef}
                                    />
                                </div>
                                <div className="form__group">
                                    <input
                                        type="password"
                                        placeholder="Password"
                                        required
                                        ref={signupPasswordRef}
                                    />
                                </div>
                                <button type="submit" className="addTOCart__btn">
                                    Sign Up
                                </button>
                            </form>
                            <Link to="/login" className="login-link">
                                Already have an account? Login
                            </Link>
                        </Col>
                    </Row>
                </Container>
            </section>
        </div>
    );
};

export default Registeration;
