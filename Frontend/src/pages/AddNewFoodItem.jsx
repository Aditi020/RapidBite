import { useState, useRef } from "react";
import Banner from "../components/UI/Banner";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import "../styles/Login.css";
import LoginImg from "../assets/Images/Login.svg";
import ForgotImg from "../assets/Images/Forgot.svg";

import AddNewFoodItemFormImage from "../assets/Images/AddNewFoodItemFormImage.png"

const AddNewFoodItem = () => {
  const [activeForm, setActiveForm] = useState("login");
  const loginEmailRef = useRef(null);
  const loginPasswordRef = useRef(null);
  const forgotEmailRef = useRef(null);

  const submitHandler = (e) => {
    e.preventDefault();
    // Implement form submission logic
    if (activeForm === "login") {
      console.log("Login form submitted");
    } else if (activeForm === "forgot") {
      console.log("Forgot password form submitted");
    }
  };

  const toggleForm = (formName) => setActiveForm(formName);

  return (
    <div>
      <Banner title="Add A New Food Item" />
      <section>
        <Container>
          <Row>
            <Col lg="8" md="8" sm="12" className="mx-auto">
              <div className="form-container">
                {/* Login Form */}
                {activeForm === "login" && (
                  <div className="form login-form">
                    <h2 className="form__title">Login</h2>
                    <form onSubmit={submitHandler}>
                      <div className="form__group">
                        <input
                          type="email"
                          placeholder="Email"
                          required
                          ref={loginEmailRef}
                          className="form__input"
                        />
                      </div>
                      <div className="form__group">
                        <input
                          type="password"
                          placeholder="Password"
                          required
                          ref={loginPasswordRef}
                          className="form__input"
                        />
                      </div>
                      <button type="submit" className="addTOCart__btn">
                        Login
                      </button>
                    </form>
                    <p className="Redirect-Link" onClick={() => toggleForm("forgot")}>
                      Forgot your password?{" "}
                    </p>
                    <p className="form__text">
                      <Link to="/register" className="form__link pointer">
                        New User?{" "}
                        Create an account
                      </Link>
                    </p>
                  </div>
                )}

                {/* Forgot Password Form */}
                {activeForm === "forgot" && (
                  <div className="form forgot-form">
                    <h2 className="form__title">Forgot Password</h2>
                    <form onSubmit={submitHandler}>
                      <div className="form__group">
                        <input
                          type="email"
                          placeholder="Email"
                          required
                          ref={forgotEmailRef}
                          className="form__input"
                        />
                      </div>
                      <button type="submit" className="addTOCart__btn">
                        Reset Password
                      </button>
                    </form>
                    <p className="Redirect-Link" onClick={() => toggleForm("login")}>
                      Remember your password?{" "}
                      Log In
                    </p>
                  </div>
                )}
              </div>
            </Col>

            <Col lg="4" md="4" sm="12" className="m-auto text-center">
              <img
                src={AddNewFoodItemFormImage} 
                alt=""
                className="addNewFoodSideImage"
              />
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default AddNewFoodItem;