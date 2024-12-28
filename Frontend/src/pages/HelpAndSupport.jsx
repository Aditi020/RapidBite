import React, { useState } from 'react';
import '../styles/HelpAndSupport.css';

const HelpAndSupport = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const [activeQuestion, setActiveQuestion] = useState(null);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Your message has been submitted!');
    };

    const toggleFAQ = (index) => {
        setActiveQuestion(activeQuestion === index ? null : index);
    };

    return (
        <div className="help-support-container">
            <div className="hero-banner">
                <h1>Need Assistance? We're Here to Help!</h1>
                <p>Have questions? We've got answers! Check out the FAQs or contact us directly.</p>
            </div>

            <div className="faq-section">
                {/* FAQ Section */}
                <div className="faq-item" onClick={() => toggleFAQ(0)}>
                    <div className="faq-question">
                        <h3>How can I track my order?</h3>
                        <i className={`faq-arrow ri-arrow-down-s-line ${activeQuestion === 0 ? 'active' : ''}`}></i>
                    </div>
                    <div className={`faq-answer ${activeQuestion === 0 ? 'show' : ''}`}>
                        <p>You can track your order using the tracking link provided in your order confirmation email. If you haven’t received it, please contact us.</p>
                    </div>
                </div>

                <div className="faq-item" onClick={() => toggleFAQ(1)}>
                    <div className="faq-question">
                        <h3>Can I modify my order after placing it?</h3>
                        <i className={`faq-arrow ri-arrow-down-s-line ${activeQuestion === 1 ? 'active' : ''}`}></i>
                    </div>
                    <div className={`faq-answer ${activeQuestion === 1 ? 'show' : ''}`}>
                        <p>Once an order is placed, we are unable to modify it. However, you can cancel it within 30 minutes of placing the order. After that, please contact customer support for further assistance.</p>
                    </div>
                </div>

                <div className="faq-item" onClick={() => toggleFAQ(2)}>
                    <div className="faq-question">
                        <h3>What is your refund policy?</h3>
                        <i className={`faq-arrow ri-arrow-down-s-line ${activeQuestion === 2 ? 'active' : ''}`}></i>
                    </div>
                    <div className={`faq-answer ${activeQuestion === 2 ? 'show' : ''}`}>
                        <p>If you are not satisfied with your order, we offer a 30-day refund policy. Please contact us to initiate a return.</p>
                    </div>
                </div>

                <div className="faq-item" onClick={() => toggleFAQ(3)}>
                    <div className="faq-question">
                        <h3>Do you offer delivery to my location?</h3>
                        <i className={`faq-arrow ri-arrow-down-s-line ${activeQuestion === 3 ? 'active' : ''}`}></i>
                    </div>
                    <div className={`faq-answer ${activeQuestion === 3 ? 'show' : ''}`}>
                        <p>We deliver to most locations within the city. Enter your address during checkout to check availability.</p>
                    </div>
                </div>

                <div className="faq-item" onClick={() => toggleFAQ(4)}>
                    <div className="faq-question">
                        <h3>What payment methods do you accept?</h3>
                        <i className={`faq-arrow ri-arrow-down-s-line ${activeQuestion === 4 ? 'active' : ''}`}></i>
                    </div>
                    <div className={`faq-answer ${activeQuestion === 4 ? 'show' : ''}`}>
                        <p>We accept all major credit cards, debit cards, and digital payment options such as PayPal, Google Pay, and Apple Pay.</p>
                    </div>
                </div>

                <div className="faq-item" onClick={() => toggleFAQ(5)}>
                    <div className="faq-question">
                        <h3>How can I reset my password?</h3>
                        <i className={`faq-arrow ri-arrow-down-s-line ${activeQuestion === 5 ? 'active' : ''}`}></i>
                    </div>
                    <div className={`faq-answer ${activeQuestion === 5 ? 'show' : ''}`}>
                        <p>To reset your password, click on the "Forgot Password" link on the login page and follow the instructions sent to your registered email address.</p>
                    </div>
                </div>

                <div className="faq-item" onClick={() => toggleFAQ(6)}>
                    <div className="faq-question">
                        <h3>Do you offer gift cards?</h3>
                        <i className={`faq-arrow ri-arrow-down-s-line ${activeQuestion === 6 ? 'active' : ''}`}></i>
                    </div>
                    <div className={`faq-answer ${activeQuestion === 6 ? 'show' : ''}`}>
                        <p>Yes, we offer gift cards that can be purchased on our website. Gift cards can be used for any product in our store.</p>
                    </div>
                </div>

                <div className="faq-item" onClick={() => toggleFAQ(7)}>
                    <div className="faq-question">
                        <h3>What should I do if I receive a damaged product?</h3>
                        <i className={`faq-arrow ri-arrow-down-s-line ${activeQuestion === 7 ? 'active' : ''}`}></i>
                    </div>
                    <div className={`faq-answer ${activeQuestion === 7 ? 'show' : ''}`}>
                        <p>If you receive a damaged product, please contact our support team within 48 hours of receiving your order. Provide photos of the damaged product to expedite the process.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HelpAndSupport;
