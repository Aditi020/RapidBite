import React, { useRef, useState } from "react";
import Banner from "../components/UI/Banner";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import "../styles/Login.css";
import LoginImg from "../assets/Images/Login.svg";
import ForgotImg from "../assets/Images/Forgot.svg";

const Login = () => {
  const [activeForm, setActiveForm] = useState("login");
  const loginEmailRef = useRef(null);
  const loginPasswordRef = useRef(null);
  const forgotEmailRef = useRef(null);

  const submitHandler = (e) => {
    e.preventDefault();
    // Implement form submission logic here (API call, etc.)
    if (activeForm === "login") {
      console.log("Login form submitted:", {
        email: loginEmailRef.current.value,
        password: loginPasswordRef.current.value
      });
    } else if (activeForm === "forgot") {
      console.log("Forgot password form submitted:", forgotEmailRef.current.value);
    }
  };

  const toggleForm = (formName) => setActiveForm(formName);

  return (
    <div>
      <Banner title="User Login" />
      <section>
        <Container>
          <Row>
            <Col lg="6" md="6" sm="12" className="mx-auto">
              <div className="card border-0 shadow rounded-3 my-5"> {/* Added Bootstrap card */}
                <div className="card-body p-4 p-sm-5"> {/* Added card-body */}
                  {/* Login Form */}
                  {activeForm === "login" && (
                    <div>
                      <h2 className="card-title text-center mb-4">Login</h2>
                      <form onSubmit={submitHandler}>
                        <div className="mb-3">
                          <label htmlFor="loginEmail" className="form-label">Email address</label>
                          <input type="email" className="form-control" id="loginEmail" ref={loginEmailRef} required />
                        </div>
                        <div className="mb-3">
                          <label htmlFor="loginPassword" className="form-label">Password</label>
                          <input type="password" className="form-control" id="loginPassword" ref={loginPasswordRef} required />
                        </div>
                        <button type="submit" className="btn btn-primary w-100">Login</button>
                      </form>
                      <p className="text-center mt-3"><Link to="/forgotpsw" onClick={() => toggleForm("forgot")} className="text-decoration-none text-muted">Forgot your password?</Link></p>
                      <p className="text-center mt-3"><Link to="/signin" className="text-decoration-none">New User? Create an account</Link></p>
                    </div>
                  )}
                </div>
              </div>
            </Col>
            <Col lg="6" md="6" sm="12" className="m-auto text-center">
              <img
                src={activeForm === "login" ? LoginImg : ForgotImg}
                alt={activeForm === "login" ? "Login-img" : "Forgot-img"}
                className="img-fluid" style={{ maxWidth: '80%', marginTop: '-10%' }}
              />
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Login;
