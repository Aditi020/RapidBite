import React from "react";
import { Container } from "reactstrap";
import "../../styles/Banner.css"; 

const Banner= (props) => {
   
    document.title = "Food ordering app - " + props.title;

    return (
        <section className="Banner">
            <Container>
                <h2 className="text-white">{props.title}</h2>
            </Container>
            <div>{props.children}</div>
        </section>
    );
};

export default Banner;
