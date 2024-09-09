import React, { useState } from "react";
import Banner from "../components/UI/Banner";
import { Container, Row, Col } from "reactstrap";
import "../styles/Contact.css";
import ContactImage from "../assets/Images/Contact.jpg";

const Contact = () => {
  const [enterName, setEnterName] = useState("");
  const [lastName, setLastName] = useState("");
  const [enterEmail, setEnterEmail] = useState("");
  const [enterNumber, setEnterNumber] = useState("");
  const [enterMessage, setEnterMessage] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [emailInvalid, setEmailInvalid] = useState(false);

  // Email validation
  const validEmail = (email) => {
    const re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    return re.test(email);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (enterEmail && !validEmail(enterEmail)) {
      setEmailInvalid(true);
      return;
    }
    setEmailInvalid(false);

    const formData = {
      name: enterName,
      email: enterEmail,
      phone: enterNumber,
      lastName: lastName,
      message: enterMessage,
    };

    console.log("Form Data Submitted:", formData);

    // Simulate form submission
    setFormSubmitted(true);

    // Optional: Reset form fields after submission
    setEnterName("");
    setLastName("");
    setEnterEmail("");
    setEnterNumber("");
    setEnterMessage("");
  };

  return (
    <div>
      <Banner title="Contact Us" />
      <section>
        <Container>
          <Row>
            <Col lg="6" md="6">
              <h6 className="mb-4" style={{ color:"#cf8625e8" , fontWeight:700 , fontSize:25 }}>Contact Information</h6>
              {formSubmitted ? (
                <div className="thankyou_message">
                  <h3>Thank you! We will get back to you shortly.</h3>
                </div>
              ) : (
                <form className="contact__form" onSubmit={submitHandler}>
                  <div className="form__group">
                    <input
                      type="text"
                      placeholder="Enter your First Name"
                      value={enterName}
                      required
                      onChange={(e) => setEnterName(e.target.value)}
                    />
                  </div>
                  <div className="form__group">
                    <input
                      type="text"
                      placeholder="Enter your Last Name"
                      value={lastName}
                      required
                      onChange={(e) => setLastName(e.target.value)}
                    />
                  </div>
                  <div className="form__group">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      value={enterEmail}
                      required
                      onChange={(e) => setEnterEmail(e.target.value)}
                    />
                    {emailInvalid && (
                      <p className="email-invalid" style={{ color: "red" }}>
                        Invalid email format
                      </p>
                    )}
                  </div>
                  <div className="form__group">
                    <input
                      type="number"
                      placeholder="Contact number"
                      value={enterNumber}
                      required
                      onChange={(e) => setEnterNumber(e.target.value)}
                    />
                  </div>
                  <div className="form__group">
                    <textarea
                      rows="5"
                      placeholder="Your message"
                      value={enterMessage}
                      required
                      onChange={(e) => setEnterMessage(e.target.value)}
                    ></textarea>
                  </div>
                  <button type="submit" className="Submit__btn">
                    Submit
                  </button>
                </form>
              )}
            </Col>

            <Col lg="6" md="5">
              <div className="Contact_img">
                <img src={ContactImage} alt="Contact Information" className="w-100" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Contact;
