import React, { useState, useEffect } from "react";
// import Banner from "../components/UI/Banner.jsx";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";

import HeroImg1 from "../assets/Images/Hero1.png";
import HeroImg2 from "../assets/Images/Hero2.png";
import HeroImg3 from "../assets/Images/Hero3.jpg";

import "../styles/Hero.css";
import { Link } from "react-router-dom";
import Category from "../components/UI/Category.jsx";
import "../styles/Home.css";
import featureImg01 from "../assets/Images/service-01.png";
import featureImg02 from "../assets/Images/service-02.png";
import featureImg03 from "../assets/Images/service-03.png";
import products from "../assets/Products.jsx";
import foodCategoryImg01 from "../assets/Images/burger_icon.png";
import foodCategoryImg02 from "../assets/Images/pizza_icon.png";
import foodCategoryImg03 from "../assets/Images/Sandwhich.png";
import ProductCard from "../components/UI/ProductCard.jsx";
import whyImg from "../assets/Images/Main1.svg";
import testimonialImg from "../assets/Images/Testimonial.jpg";
import TestSlider from "../components/UI/Testimonial.jsx";

const featureData = [
    {
        title: "Quick Delivery",
        desc: "Get your favorite meals delivered to your doorstep in no time .",
    },
    {
        title: "Super Dine In",
        desc: "Skip the wait – order ahead and enjoy hassle-free pick-up that's ready when you are.",
    },
    {
        title: "Easy Pick Up",
        desc: "Skip the wait – order ahead and enjoy hassle-free pick-up that's ready when you are.",
    },
];

const Home = () => {
    const [category, setCategory] = useState("ALL");
    const [allProducts, setAllProducts] = useState(products);
    const [hotPizza, setHotPizza] = useState([]);

    useEffect(() => {
        const filteredPizza = products.filter((item) => item.category === "Pizza");
        const slicePizza = filteredPizza.slice(0, 4);
        setHotPizza(slicePizza);
    }, []);

    useEffect(() => {
        if (category === "ALL") {
            setAllProducts(products);
        }
        if (category === "BURGER") {
            const filteredProducts = products.filter(
                (item) => item.category === "Burger"
            );
            setAllProducts(filteredProducts);
        }
        if (category === "PIZZA") {
            const filteredProducts = products.filter(
                (item) => item.category === "Pizza"
            );
            setAllProducts(filteredProducts);
        }
        if (category === "Sandwich") {
            const filteredProducts = products.filter(
                (item) => item.category === "Sandwich"
            );
            setAllProducts(filteredProducts);
        }
    }, [category]);

    return (
        <>

            {/* Hero Sect */}
            <section>
                <Container>
                    <Row>
                        <Col lg="6" md="6">
                            <div className="Hero__content">
                                <h5 className="mb-3">Easy way to make an order</h5>
                                <h1 className="mb-4 Hero__title">
                                    <span>HUNGRY?</span> Just wait <br /> food at
                                    <span> your door</span>
                                </h1>
                                <p>
                                    Craving something delicious? With RapidBite, your favorite meals are just a tap away—hot, fresh, and ready to delight!
                                </p>
                                <div className="Hero__btns d-flex align-items-center gap-5 mt-4">
                                    <button className="order__btn d-flex align-items-center justify-content-between">
                                        Order now <i className="ri-arrow-right-s-line"></i>
                                    </button>
                                    <button className="all__foods-btn">
                                        <Link to="/foods">See all foods</Link>
                                    </button>
                                </div>
                                <div className="Hero__service d-flex align-items-center gap-5 mt-5">
                                    <p className="d-flex align-items-center gap-2">
                                        <span className="shipping__icon">
                                            <i className="ri-car-line"></i>
                                        </span>
                                        No shipping charge
                                    </p>
                                    <p className="d-flex align-items-center gap-2">
                                        <span className="shipping__icon">
                                            <i className="ri-shield-check-line"></i>
                                        </span>
                                        100% secure checkout
                                    </p>
                                </div>
                            </div>
                        </Col>
                        <Col lg="6" md="6">
                            <div className="Hero__img-container">
                                <img src={HeroImg1} alt="Hero 1" className="HeroImg fade" style={{ width:"100%", height: "180%", top:"-43%", right :"-5%", transform:"scale(0.8)", display:"flex", justifyContent:"centre" , alignItems:"center" , overflow:"hidden"}} />
                                <img src={HeroImg2} alt="Hero 2" className="HeroImg fade" style={{ width: "100%", height: "120%", top: "-10%",  display: "flex",  right :"-5%", justifyContent:"centre" , alignItems:"center" , overflow:"hidden"}} />
                                <img src={HeroImg3} alt="Hero 3" className="HeroImg fade" style={{ width: "100%", height: "120%", top: "-10%", display: "flex", right: "-5%", justifyContent:"centre" , alignItems:"center" , overflow:"hidden"}} />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* Category Section */}
            <section className="pt-0">
                <Category />
            </section>

            {/* Key Features Food Section */}
            <section>
                <Container>
                    <Row>
                        <Col lg="12" className="text-center">
                            <h5 className="feature__subtitle mb-4" style={{ fontSize: '24px'}}>What we serve</h5>
                            <h2 className="feature__title">Got food cravings?</h2>
                            <h2 className="feature__title">
                                Let us  <span>satisfy them</span>
                            </h2>
                            <p className="mb-1 mt-4 feature__text">
                                with our delicious, freshly prepared meals delivered straight to your door.
                            </p>
                            <p className="feature__text">
                                Whether you’re in the mood for a quick snack or a hearty meal, RapidBite has got you covered .
                                
                            </p>
                        </Col>
                        {featureData.map((item, index) => (
                            <Col lg="4" md="6" sm="6" key={index} className="mt-5">
                                <div className="feature__item text-center px-5 py-3">
                                    <img
                                        src={
                                            index === 0
                                                ? featureImg01
                                                : index === 1
                                                    ? featureImg02
                                                    : featureImg03
                                        }
                                        alt={`feature-img-${index + 1}`}
                                        className={`w-25 mb-3 feature-img-${index + 1}`}
                                    />
                                    <h5 className="fw-bold mb-3">{item.title}</h5>
                                    <p>{item.desc}</p>
                                </div>
                            </Col>
                        ))}

                    </Row>
                </Container>
            </section>
            
            {/* Popular Food Section */}
            <section>
                <Container>
                    <Row>
                        <Col lg="12" className="text-center">
                            <h2>Popular Foods</h2>
                        </Col>

                        <Col lg="12">
                            <div className="food__category d-flex align-items-center justify-content-center gap-4">
                                <button className={`all__btn ${category === "ALL" ? "foodBtnActive" : ""}`} onClick={() => ("ALL")}>
                                    All
                                </button>
                                <button
                                    className={`d-flex align-items-center gap-2 ${category === "BURGER" ? "foodBtnActive" : ""
                                        }`}
                                    onClick={() => setCategory("BURGER")}
                                >
                                    <img src={foodCategoryImg01} alt="" />
                                    Burger
                                </button>
                                <button
                                    className={`d-flex align-items-center gap-2 ${category === "PIZZA" ? "foodBtnActive" : ""
                                        }`}
                                    onClick={() => setCategory("PIZZA")}
                                >
                                    <img src={foodCategoryImg02} alt="" />
                                    Pizza
                                </button>
                                <button
                                    className={`d-flex align-items-center gap-2 ${category === "Sandwich" ? "foodBtnActive" : ""
                                        }`}
                                    onClick={() => setCategory("Sandwich")}
                                >
                                    <img src={foodCategoryImg03} alt="" />
                                    Sandwich
                                </button>
                            </div>
                        </Col>

                        {allProducts.map((item) => (
                            <Col lg="3" md="4" sm="6" xs="6" key={item.id} className="mt-5">
                                <ProductCard item={item} />
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>

            {/* Why choose us Section */}
            <section className="why__choose-us">
                <Container>
                    <Row>
                        <Col lg="6" md="6">
                            <img src={whyImg} alt="why-tasty-treat" className="w-100" style={{width:"140px" }}/>
                        </Col>
                        <Col lg="6" md="6">
                            <div className="why__tasty-treat">
                                <h2 className="tasty__treat-title mb-4">
                                    Why <span>Tasty Treat?</span>
                                </h2>
                                <p className="tasty__treat-desc">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Dolorum, minus. Tempora reprehenderit a corporis velit,
                                    laboriosam vitae ullam, repellat illo sequi odio esse iste
                                    fugiat dolor, optio incidunt eligendi deleniti!
                                </p>

                                <ListGroup className="mt-4">
                                    <ListGroupItem className="border-0 ps-0">
                                        <p className="choose__us-title d-flex align-items-center gap-2 ">
                                            <i className="ri-checkbox-circle-line"></i> Fresh and
                                            tasty foods
                                        </p>
                                        <p className="choose__us-desc">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                            Qui, earum.
                                        </p>
                                    </ListGroupItem>

                                    <ListGroupItem className="border-0 ps-0">
                                        <p className="choose__us-title d-flex align-items-center gap-2 ">
                                            <i className="ri-checkbox-circle-line"></i> Quality
                                            support
                                        </p>
                                        <p className="choose__us-desc">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                            Qui, earum.
                                        </p>
                                    </ListGroupItem>

                                    <ListGroupItem className="border-0 ps-0">
                                        <p className="choose__us-title d-flex align-items-center gap-2 ">
                                            <i className="ri-checkbox-circle-line"></i> Order from
                                            any location
                                        </p>
                                        <p className="choose__us-desc">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                            Qui, earum.
                                        </p>
                                    </ListGroupItem>
                                </ListGroup>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* Hot Pizzas Section */}
            <section className="pt-0">
                <Container>
                    <Row>
                        <Col lg="12" className="text-center mb-5">
                            <h2>Hot Pizza</h2>
                        </Col>

                        {hotPizza.map((item) => (
                            <Col lg="3" md="4" sm="6" xs="6" key={item.id}>
                                <ProductCard item={item} />
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>

            {/* Testimonials Section */}
            <section>
            <Container>
                    <Row>
                        <Col lg="6" md="6">
                            <div className="why__tasty-treat">
                                <h5 className="testimonial_heading mb-4">Testimonial</h5>
                                <h2 className="tasty__treat-title mb-4">
                                    What our <span>customers</span> are saying
                                </h2>
                                <p className="tasty__treat-desc">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus voluptate ad dolorem, rem ea,  inventore labore saepe obcaecati ipsum quis ullam reprehenderit quam sapiente maxime. Atque, impedit!
                                </p>

                                <ListGroup className="mt-4">

                                    <ListGroupItem className="border-0 ps-0">
                                        <TestSlider />
                                    </ListGroupItem>

                                </ListGroup>

                            </div>
                        </Col>

                        <Col lg="6" md="6">
                            <img src={testimonialImg} alt="Testimonials" className="w-100" />
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
};

export default Home;
