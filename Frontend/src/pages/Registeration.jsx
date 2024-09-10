import React, { useRef, useState } from "react";
import Banner from "../components/UI/Banner";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import "../styles/Registeration.css";
import RegisterationImg from "../assets/Images/Registeration.svg";

const Registration = () => {
    const [error, setError] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);

    const signupNameRef = useRef(null);
    const signupEmailRef = useRef(null);
    const signupPasswordRef = useRef(null);
    const signupConfirmPasswordRef = useRef(null);

    const validateForm = () => {
        const name = signupNameRef.current.value;
        const email = signupEmailRef.current.value;
        const password = signupPasswordRef.current.value;
        const confirmPassword = signupConfirmPasswordRef.current.value;

        if (!name || !email || !password || !confirmPassword) {
            return "All fields are required.";
        }

        if (password !== confirmPassword) {
            return "Passwords do not match.";
        }

        return "";
    };

    const submitHandler = async (e) => {
        e.preventDefault();

        const errorMessage = validateForm();
        if (errorMessage) {
            setError(errorMessage);
            return;
        }

        setError("");
        setIsSubmitting(true);
        try {
            console.log("Registration form submitted");
        } catch (error) {
            setError("Registration failed. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div>
            <Banner title="Sign Up" />
            <section>
                <Container>
                    <Row>
                        <Col lg="6" md="6" sm="12" className="mx-auto">
                            <div className="form-container">
                                <div className="form registration-form">
                                    <h2 className="form__title">Register</h2>
                                    <form onSubmit={submitHandler}>
                                        {error && <p className="form__error">{error}</p>}
                                        <div className="form__group">
                                            <input
                                                type="text"
                                                placeholder="Full Name"
                                                required
                                                ref={signupNameRef}
                                                className="form__input"
                                            />
                                        </div>
                                        <div className="form__group">
                                            <input
                                                type="email"
                                                placeholder="Email"
                                                required
                                                ref={signupEmailRef}
                                                className="form__input"
                                            />
                                        </div>
                                        <div className="form__group">
                                            <input
                                                type="password"
                                                placeholder="Password"
                                                required
                                                ref={signupPasswordRef}
                                                className="form__input"
                                            />
                                        </div>
                                        <div className="form__group">
                                            <input
                                                type="password"
                                                placeholder="Confirm Password"
                                                required
                                                ref={signupConfirmPasswordRef}
                                                className="form__input"
                                            />
                                        </div>
                                        <button type="submit" className="Signin-btn" disabled={isSubmitting}>
                                            {isSubmitting ? "Signing Up..." : "Sign Up"}
                                        </button>
                                    </form>
                                    <p className="form__text">
                                        <Link to="/login" className="Redirect-Link ">
                                        Already have an account?{" "}
                                            Login
                                        </Link>
                                    </p>
                                </div>
                            </div>
                        </Col>
                        <Col lg="6" md="6" sm="12" className="m-auto text-center">
                            <img src={RegisterationImg} alt="Login-img" className="RegisterationImg" />
                        </Col>
                    </Row>
                </Container>
            </section>
        </div>
    );
};

export default Registration;
