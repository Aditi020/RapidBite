import React, { useRef, useState } from "react";
import Banner from "../components/UI/Banner";
import { Container, Row, Col, Button } from "reactstrap";
import { Link } from "react-router-dom";
import "../styles/ForgotPsw.css";
import ForgotImg from "../assets/Images/Forgot.svg"; // Use the same image as the login page

const ForgotPsw = () => {
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const emailRef = useRef(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        setIsSubmitting(true);

        try {
            //Implement your forgot password logic here (e.g., send reset email)
            if (!email) throw new Error("Email is required.");
            console.log("Reset password email sent to:", email);
            //Redirect to login after successful submission.
        } catch (err) {
            setError(err.message);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div>
            <Banner title="Forgot Password" />
            <section>
                <Container>
                    <Row>
                        <Col lg="6" md="6" sm="12" className="mx-auto">
                            <div className="card border-0 shadow rounded-3 my-5">
                                <div className="card-body p-4 p-sm-5">
                                    <h2 className="card-title text-center mb-4">Forgot Password</h2>
                                    {error && <div className="alert alert-danger">{error}</div>}
                                    <form onSubmit={handleSubmit}>
                                        <div className="mb-3">
                                            <label htmlFor="forgotEmail" className="form-label">Email address</label>
                                            <input
                                                type="email"
                                                className="form-control"
                                                id="forgotEmail"
                                                ref={emailRef}
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                required
                                            />
                                        </div>
                                        <Button type="submit" className="btn btn-primary w-100" disabled={isSubmitting} style={{ backgroundColor:"#308cbf", borderStyle:"none"}}>
                                            {isSubmitting ? "Sending..." : "Reset Password"}
                                        </Button>
                                    </form>
                                    <p className="text-center mt-3"><Link to="/login" className="text-decoration-none text-muted">Remember your password? Log In</Link></p>
                                </div>
                            </div>
                        </Col>
                        <Col lg="6" md="6" sm="12" className="m-auto text-center">
                            <img src={ForgotImg} alt="Forgot Password" className="img-fluid" style={{ maxWidth: '80%', marginTop: '-10%' }} />
                        </Col>
                    </Row>
                </Container>
            </section>
        </div>
    );
};

export default ForgotPsw;

