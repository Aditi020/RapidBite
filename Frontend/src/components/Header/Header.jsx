import React from 'react';
import { Link } from 'react-router-dom';
import "../../styles/Header.css"
// import logo from '../assets/'; // Adjust the path based on your folder structure
import { IoBasketOutline, IoPersonOutline, IoMenuOutline, } from 'react-icons/io5';
import { Container } from 'reactstrap'; // Used Bootstrap here

export default function Header() {
    return (
        <header className="header">
            <Container> {/* Used Bootstrap here */}
               <div className="nav__wrapper d-flex align-items-center justify-content-between">
                    <div className="logo d-flex align-items-center">
                         {/* <img src={logo} alt="logo" />  */}
                         <h5>RapidBite</h5> 
                     </div> 

                    <div className="navigation">
                        <div className="menu d-flex align-items-center gap-5"> {/* Used Bootstrap here */}
                            <Link to="/home" className="active__menu">Home</Link>
                            <Link to="/foods">Foods</Link>
                            <Link to="/cart">Cart</Link>
                            <Link to="/contact">Contact</Link>
                        </div>
                    </div>

                    <div className="nav__right d-flex align-items-center gap-4"> {/* Used Bootstrap here */}
                        <span className="cart__icon">
                            <IoBasketOutline />
                            <span className="cart__badge">0</span>
                        </span>
                        <span className="user">
                            <Link to="/login">
                                <IoPersonOutline />
                            </Link>
                        </span>
                        <span className="mobile__menu">
                            <IoMenuOutline />
                        </span>
                   
                </div>
                </div>
            </Container>
        </header>
    );
};
