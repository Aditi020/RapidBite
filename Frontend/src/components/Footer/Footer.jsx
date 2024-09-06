import React from 'react';
import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap';
import '../../styles/Footer.css';
// import "remixicon/fonts/remixicon.css"; 
// import logo from '../../assets/images/res-logo.png';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row>
                    <Col lg="3" md="4" sm="6">
                        <div className="footer__logo text-start">
                            {/* <img src={logo} alt="logo" /> */}
                            <h5>Tasty Treat</h5>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt pariatur accusamus
                            </p>
                        </div>
                    </Col>

                    <Col lg="3" md="4" sm="6">
                        <h5 className="footer__title">Delivery Time</h5>
                        <ListGroup className="deliver__time-list">
                            <ListGroupItem className="delivery__time-item border-0 ps-0">
                                <span>Monday - Sunday</span>
                                <p>9:00am - 11:00pm</p>
                            </ListGroupItem>
                        </ListGroup>
                    </Col>

                    <Col lg="3" md="4" sm="6">
                        <h5 className="footer__title">Contact</h5>
                        <ListGroup className="deliver__time-list">
                            <ListGroupItem className="delivery__time-item border-0 ps-0">
                                <p>Location: Chandni Chowk,Khandala, India</p>
                            </ListGroupItem>
                            <ListGroupItem className="delivery__time-item border-0 ps-0">
                                <span>Phone: 9999999999</span>
                            </ListGroupItem>
                            <ListGroupItem className="delivery__time-item border-0 ps-0">
                                <span>Email: rapidbite@gmail.com</span>
                            </ListGroupItem>
                        </ListGroup>
                    </Col>
                    <Col lg="3" md="4" sm="6">
                        <h5 className="footer__title">Newsletter</h5>
                        <p>Subscribe our newsletter</p>
                        <div className="newsletter">
                            <input type="email" placeholder="Enter your email" />
                            <span className="newsletter-send">
                                <i className="ri-send-plane-fill"></i>
                            </span>
                        </div>
                    </Col>
                </Row>

                <Row className="mt-5">
                    <Col lg="6" md="6">
                        <div className="social__links d-flex align-items-center gap-4 justify-content-end">
                            <p className="m-0">Follow: </p>
                            <span>
                                <Link to="https://github.com/Aditi020">
                                    <i className="ri-github-line"></i>
                                </Link>
                            </span>
                            <span>
                                <Link to="https://instagram.com/_">
                                    <i className="ri-instagram-line"></i>
                                </Link>
                            </span>
                            <span>
                                <Link to="https://www.linkedin.com/in">
                                    <i className="ri-linkedin-line"></i>
                                </Link>
                            </span>
                        </div>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;
