import React, { useRef } from "react";
import Banner from "../components/UI/Banner";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import "../styles/Login.css"; 

const Login = () => {
    const loginNameRef = useRef();
    const loginPasswordRef = useRef();

    const submitHandler = (e) => {
        e.preventDefault();
    };

    return (
        <div>
            <div className="w-100">
                <Banner title="Login" />
                <section>
                    <Container>
                        <Row>
                            <Col lg="6" md="6" sm="12" className="m-auto text-center">
                                <form className="form mb-5" onSubmit={submitHandler}>
                                    <div className="form__group">
                                        <input
                                            type="email"
                                            placeholder="Email"
                                            required
                                            ref={loginNameRef}
                                        />
                                    </div>
                                    <div className="form__group">
                                        <input
                                            type="password"
                                            placeholder="Password"
                                            required
                                            ref={loginPasswordRef}
                                        />
                                    </div>
                                    <button type="submit" className="addTOCart__btn">
                                        Login
                                    </button>
                                </form>
                                <Link to="/register" className="create-account-link">
                                    Don't have an account? Create an account
                                </Link>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </div>
        </div>
    );
};

export default Login;
