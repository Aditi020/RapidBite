import React, { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import "../../styles/Header.css"
// import logo from '../assets/';
import { IoBasketOutline, IoPersonOutline, IoMenuOutline, IoCloseOutline } from 'react-icons/io5';
import { Container } from 'reactstrap'; // Used Bootstrap here

export default function Header() {

    const [isMenuOpen, setIsMenuOpen] = useState(false); // Manage mobile menu state
    const navigate = useNavigate();

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen); // Toggle mobile menu
    };

    return (
        <header className="header">

            <Container> 
                <div className="nav__wrapper d-flex align-items-center justify-content-between">
                    <div className="logo d-flex align-items-center" onClick={() => navigate("/home")}>
                        {/* <img src={logo} alt="logo" />  */}
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
                        <span className="cart__icon">
                            <IoBasketOutline />
                            <span className="cart__badge">0</span>
                        </span>
                        <span className="user">
                            <Link to="/login">
                                <IoPersonOutline />
                            </Link>
                        </span>
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
