import React, { useState, useEffect } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import "../../styles/Header.css";
import { IoMenuOutline, IoCloseOutline } from 'react-icons/io5';
import { Container } from 'reactstrap';
import { useSelector } from "react-redux";
import Dropdown from 'react-bootstrap/Dropdown';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);  // For header animation
    const navigate = useNavigate();

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const totalItemsInCart = useSelector((state) => state.cart.cartItems.reduce((acc, item) => acc + item.quantity, 0)); // Calculate total quantity

    const handleScroll = () => {
        if (window.scrollY > 50) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header className={`header ${isScrolled ? 'scrolled' : ''}`} >
            <Container >
                <div className="nav__wrapper d-flex align-items-center justify-content-between">
                    <div className="logo d-flex align-items-center" onClick={() => navigate("/home")}>
                        <h5 style={{ color: "#e18103c3" }} >RapidBite</h5>
                    </div>

                    <div className={`navigation ${isMenuOpen ? 'active' : ''}`}>
                        <div className="menu d-flex align-items-center gap-5">
                            <NavLink to="/home" className={({ isActive }) => (isActive ? "active__menu" : "")} onClick={toggleMenu}>
                                Home
                            </NavLink>
                            <NavLink to="/foods" className={({ isActive }) => (isActive ? "active__menu" : "")} onClick={toggleMenu}>
                                Foods
                            </NavLink>
                            <NavLink to="/cart" className={({ isActive }) => (isActive ? "active__menu" : "")} onClick={toggleMenu}>
                                Cart
                            </NavLink>
                            <NavLink to="/contact" className={({ isActive }) => (isActive ? "active__menu" : "")} onClick={toggleMenu}>
                                Contact
                            </NavLink>
                        </div>
                    </div>

                    <div className="nav__right d-flex align-items-center gap-4">
                        <span className="cart__icon" >
                            <Link to="/cart" style={{ textDecoration: "none" }}>
                                <i className="ri-shopping-cart-2-line" style={{ color: "#96621dfd", fontSize: "20px" }}></i>
                                <span className="cart__badge">{totalItemsInCart}</span>
                            </Link>
                        </span>

                        <Dropdown>
                            <Dropdown.Toggle variant="Warning" id="dropdown-basic">
                                <i className="ri-user-3-line" style={{ color: "#96621dfd", fontSize: "16px", fontWeight: "500" }}></i>
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item>
                                    <Link to="/user_login" className='login_options'>
                                        User
                                    </Link>
                                </Dropdown.Item>

                                <Dropdown.Item>
                                    <Link to="/admin_login" className='login_options'>
                                        Admin
                                    </Link>
                                </Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>

                        <span className="mobile__menu" onClick={toggleMenu}>
                            {isMenuOpen ? <IoCloseOutline /> : <IoMenuOutline />}
                        </span>
                    </div>
                </div>
                {isMenuOpen && (
                    <div className="mobile__nav">
                        <NavLink to="/home" className="mobile__link" onClick={toggleMenu}>
                            Home
                        </NavLink>
                        <NavLink to="/foods" className="mobile__link" onClick={toggleMenu}>
                            Foods
                        </NavLink>
                        <NavLink to="/cart" className="mobile__link" onClick={toggleMenu}>
                            Cart
                        </NavLink>
                        <NavLink to="/contact" className="mobile__link" onClick={toggleMenu}>
                            Contact
                        </NavLink>
                    </div>
                )}
            </Container>
        </header>
    );
};
