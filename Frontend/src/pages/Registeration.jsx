import React, { useState, useRef } from "react";
import Banner from "../components/UI/Banner";
import { Container, Row, Col, Button } from "reactstrap";
import { Link } from "react-router-dom";
import "../styles/Registeration.css";
import RegisterationImg from "../assets/Images/Registeration.svg";

const Registeration = () => {
    const [currentStep, setCurrentStep] = useState(1);
    const [error, setError] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formData, setFormData] = useState({
        step1: { name: "", email: "", password: "", confirmPassword: "" },
        step2: { dob: "", gender: "", contact: "" },
        step3: { country: "", city: "", postalCode: "", addressLine1: "", addressLine2: "" }
    });

    const signupNameRef = useRef(null);
    const signupEmailRef = useRef(null);
    const signupPasswordRef = useRef(null);
    const signupConfirmPasswordRef = useRef(null);
    const dobRef = useRef(null);
    const genderRef = useRef(null);
    const contactRef = useRef(null);

    const handleInputChange = (e, step) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [step]: { ...prevData[step], [name]: value }
        }));
        setError("");
    };

    const validateForm = (step) => {
        switch (step) {
            case 1:
                const { name, email, password, confirmPassword } = formData.step1;
                if (!name || !email || !password || !confirmPassword) return "All fields are required.";
                if (password !== confirmPassword) return "Passwords do not match.";
                if (!/^[a-zA-Z ]+$/.test(name)) return "Name must contain only alphabets and spaces.";
                if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return "Invalid email format.";
                if (password.length < 8) return "Password must be at least 8 characters long.";
                break;
            case 2:
                const { contact } = formData.step2;
                if (contact && !/^\d+$/.test(contact)) return "Contact number must contain only digits.";
                break;
            case 3:
                const { postalCode, country, city, addressLine1 } = formData.step3;
                if (!country || !city || !postalCode || !addressLine1) return "All address fields are required.";
                if (!/^[a-zA-Z\s]+$/.test(city)) return "City must contain only alphabets and spaces.";
                if (!/^[a-zA-Z0-9\s-]+$/.test(addressLine1)) return "Address Line 1 must contain only alphabets, numbers, spaces and hyphens";
                break;
            default:
                return '';
        }
        return '';
    };

    const submitHandler = async (e) => {
        e.preventDefault();
        const errorMessage = validateForm(currentStep);
        if (errorMessage) {
            setError(errorMessage);
            return;
        }

        if (currentStep === 3) {
            setIsSubmitting(true);
            try {
                // **REPLACE THIS WITH YOUR ACTUAL API CALL**
                // const response = await fetch('/api/register', { /* ... your fetch options */ });
                // if (!response.ok) { throw new Error('Registeration failed'); }
                // const data = await response.json();
                // console.log('Registeration successful:', data);
                // // Redirect to login page or show success message.
                console.log("Form submitted:", formData); // Placeholder
            } catch (error) {
                setError(error.message);
            } finally {
                setIsSubmitting(false);
            }
            return;
        }

        setCurrentStep(currentStep + 1);
        setError("");
    };

    const prevStepHandler = () => {
        setCurrentStep(currentStep - 1);
        setError("");
    };


    const renderStepContent = () => {
        switch (currentStep) {
            case 1:
                return (
                    <div>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Full Name</label>
                            <input type="text" className="form-control" id="name" name="name" required ref={signupNameRef} value={formData.step1.name} onChange={(e) => handleInputChange(e, "step1")} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email address</label>
                            <input type="email" className="form-control" id="email" name="email" required ref={signupEmailRef} value={formData.step1.email} onChange={(e) => handleInputChange(e, "step1")} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Password</label>
                            <input type="password" className="form-control" id="password" name="password" required ref={signupPasswordRef} value={formData.step1.password} onChange={(e) => handleInputChange(e, "step1")} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
                            <input type="password" className="form-control" id="confirmPassword" name="confirmPassword" required ref={signupConfirmPasswordRef} value={formData.step1.confirmPassword} onChange={(e) => handleInputChange(e, "step1")} />
                        </div>
                    </div>
                );
            case 2:
                return (
                    <div>
                        <div className="mb-3">
                            <label htmlFor="dob" className="form-label">Date of Birth</label>
                            <input type="date" className="form-control" id="dob" name="dob" ref={dobRef} value={formData.step2.dob} onChange={(e) => handleInputChange(e, "step2")} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="gender" className="form-label">Gender</label>
                            <select className="form-select" id="gender" name="gender" ref={genderRef} value={formData.step2.gender} onChange={(e) => handleInputChange(e, "step2")}>
                                <option value="">Select Gender</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="other">Other</option>
                            </select>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="contact" className="form-label">Contact Number</label>
                            <input type="tel" className="form-control" id="contact" name="contact" ref={contactRef} value={formData.step2.contact} onChange={(e) => handleInputChange(e, "step2")} />
                        </div>
                    </div>
                );
            case 3:
                return (
                    <div>
                        <div className="mb-3">
                            <label htmlFor="country" className="form-label">Country</label>
                            <input type="text" className="form-control" id="country" name="country" value={formData.step3.country} onChange={(e) => handleInputChange(e, "step3")} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="city" className="form-label">City</label>
                            <input type="text" className="form-control" id="city" name="city" value={formData.step3.city} onChange={(e) => handleInputChange(e, "step3")} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="postalCode" className="form-label">Postal Code</label>
                            <input type="text" className="form-control" id="postalCode" name="postalCode" value={formData.step3.postalCode} onChange={(e) => handleInputChange(e, "step3")} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="addressLine1" className="form-label">Address Line 1</label>
                            <input type="text" className="form-control" id="addressLine1" name="addressLine1" value={formData.step3.addressLine1} onChange={(e) => handleInputChange(e, "step3")} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="addressLine2" className="form-label">Address Line 2 (Optional)</label>
                            <input type="text" className="form-control" id="addressLine2" name="addressLine2" value={formData.step3.addressLine2} onChange={(e) => handleInputChange(e, "step3")} />
                        </div>
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <div>
            <Banner title="Sign Up" />
            <section>
                <Container style={{ marginTop: "-4%" }}>
                    <Row>
                        <Col lg="6" md="6" sm="12" className="mx-auto">
                            <div className="card border-0 shadow rounded-3 my-5">
                                <div className="card-body p-4 p-sm-5">
                                    <h2 className="form__title">Register</h2>
                                    <form onSubmit={submitHandler}>
                                        {error && <div className="alert alert-danger">{error}</div>}
                                        {renderStepContent()}
                                        <div className="d-flex justify-content-between mt-4 mb-2">
                                            {currentStep > 1 && <Button type="button" onClick={prevStepHandler} color="secondary">Previous</Button>}
                                            <Button type="submit" color="primary" disabled={isSubmitting}>
                                                {isSubmitting ? "Registering..." : (currentStep === 3 ? "Register" : "Next")}
                                            </Button>
                                        </div>
                                    </form>
                                    <p className="form__text mt-3">
                                        <Link to="/login" className="text-decoration-none">Already have an account? Login</Link>
                                    </p>
                                </div>
                            </div>
                        </Col>
                        <Col lg="6" md="6" sm="12" className="m-auto text-center">
                            <img src={RegisterationImg} alt="Login-img" className="img-fluid" style={{ maxWidth: '80%', marginTop: '-10%' }} />
                        </Col>
                    </Row>
                </Container>
            </section>
        </div>
    );
};

export default Registeration;
