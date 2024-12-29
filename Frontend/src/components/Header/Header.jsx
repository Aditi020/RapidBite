import React, { useState, useEffect } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import "../../styles/Header.css";
import { IoMenuOutline, IoCloseOutline } from 'react-icons/io5';
import { Container } from 'reactstrap';
import { useSelector } from "react-redux";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false); // Profile dropdown state
    const navigate = useNavigate();

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const toggleProfileMenu = () => {
        setIsProfileMenuOpen(!isProfileMenuOpen);
    };

    const totalItemsInCart = useSelector((state) => state.cart.cartItems.reduce((acc, item) => acc + item.quantity, 0));

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
            <Container>
                <div className="nav__wrapper d-flex align-items-center justify-content-between">
                    {/* Logo Section */}
                    <div className="logo d-flex align-items-center" onClick={() => navigate("/home")}>
                        <h5 style={{ color: "#e18103c3" }}>RapidBite</h5>
                    </div>

                    {/* Navigation Links */}
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
                            <NavLink to="/blog" className={({ isActive }) => (isActive ? "active__menu" : "")} onClick={toggleMenu}>
                                Blog
                            </NavLink>
                            <NavLink to="/contact" className={({ isActive }) => (isActive ? "active__menu" : "")} onClick={toggleMenu}>
                                Contact
                            </NavLink>
                        </div>
                    </div>

                    {/* Right Section */}
                    <div className="nav__right d-flex align-items-center gap-4">
                        {/* Cart Icon */}
                        <span className="cart__icon">
                            <Link to="/cart" style={{ textDecoration: "none" }}>
                                <i className="ri-shopping-cart-2-line" style={{ color: "#96621dfd", fontSize: "20px" }}></i>
                                <span className="cart__badge">{totalItemsInCart}</span>
                            </Link>
                        </span>

                        {/* User Profile Dropdown */}
                        <div className="profile" onClick={toggleProfileMenu}>
                            <div className="user">
                                <h6>Katherine Cooper</h6>
                                {/* <p>@probablykat66</p> */}
                            </div>
                            <div className="img-box">
                                <img src="https://i.postimg.cc/BvNYhMHS/user-img.jpg" alt="User Avatar" />
                            </div>
                            <div className={`profile-menu ${isProfileMenuOpen ? 'active' : ''}`}>
                                <ul>
                                    <li><Link to="/profile"><i className="ph-bold ph-user"></i>&nbsp;Profile</Link></li>
                                    <li><Link to="/inbox"><i className="ph-bold ph-envelope-simple"></i>&nbsp;Inbox</Link></li>
                                    <li><Link to="/setting"><i className="ph-bold ph-gear-six"></i>&nbsp;Settings</Link></li>
                                    <li><Link to="/help"><i className="ph-bold ph-question"></i>&nbsp;Help</Link></li>
                                    <li><Link to="/signin"><i className="ph-bold ph-sign-out"></i>&nbsp;Sign Out</Link></li>
                                </ul>
                            </div>
                        </div>

                        {/* Mobile Menu Icon */}
                        <span className="mobile__menu" onClick={toggleMenu}>
                            {isMenuOpen ? <IoCloseOutline /> : <IoMenuOutline />}
                        </span>
                    </div>
                </div>

                {/* Mobile Navigation Links */}
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
                        <NavLink to="/blog" className="mobile__link" onClick={toggleMenu}>
                            Blog
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
