import React from "react";
import { Container, Row, Col } from "reactstrap";

// import categoryImg01 from "../../../assets/images/category-01.png";
// import categoryImg02 from "../../../assets/images/category-02.png";
// import categoryImg03 from "../../../assets/images/category-03.png";
// import categoryImg04 from "../../../assets/images/category-04.png";

import "../../styles/Category.css";

const categoryData = [
  {
    display: "Fastfood",
    imgUrl: "" // categoryImg01 will be added later
  },
  {
    display: "Italian Pizza",
    imgUrl: "" // categoryImg02 will be added later
  },
  {
    display: "French Sandwhich",
    imgUrl: "" // categoryImg03 will be added later
  },
  {
    display: "Delcious Burger",
    imgUrl: "" // categoryImg04 will be added later
  },
];

const Category = () => {
  return (
    <Container>
      <Row>
        {categoryData.map((item, index) => (
          <Col lg="3" md="4" sm="6" xs="6" className="mb-4" key={index}>
            <div className="category__item d-flex align-items-center gap-3">
              <div className="category__img">
                {/* <img src={item.imgUrl} alt="category__item" /> */}
              </div>
              <h6>{item.display}</h6>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Category;
