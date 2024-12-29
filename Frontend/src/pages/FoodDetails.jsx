import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import axios from "axios";
import "../styles/FoodDetails.css";
import ProductCard from "../components/UI/ProductCard";
import Banner from "../components/UI/Banner";

const FoodDetails = () => {
  const [product, setProduct] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const { id } = useParams();

  // Fetch product details
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(
          `https://api.spoonacular.com/food/products/${id}?apiKey=6ea77396bafc4d5cb38e19597ffe5000`
        );
        setProduct(response.data);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    fetchProduct();
  }, [id]);

  // Fetch related products
  useEffect(() => {
    const fetchRelatedProducts = async () => {
      if (product?.category) {
        try {
          const response = await axios.get(
            `https://api.spoonacular.com/food/products/search?query=${product.category}&number=4&apiKey=6ea77396bafc4d5cb38e19597ffe5000`
          );
          setRelatedProducts(response.data.products || []);
        } catch (error) {
          console.error("Error fetching related products:", error);
        }
      }
    };

    fetchRelatedProducts();
  }, [product]);

  if (!product) return <p>Loading...</p>;

  return (
    <div>
      <Banner title={product.title} />
      <section>
        <Container>
          <Row>
            <Col lg="4" md="4">
              <div className="product__main-img">
                <img src={product.image} alt={product.title} className="w-100" />
              </div>
            </Col>

            <Col lg="8" md="8">
              <div className="single__product-content">
                <h2 className="product__title mb-3">{product.title}</h2>
                <p className="product__price">
                  Price: <span>${product.price || "N/A"}</span>
                </p>
                <p className="category mb-5">
                  Category: <span>{product.category || "N/A"}</span>
                </p>

                <button className="addTOCart__btn">Add to Cart</button>
              </div>
            </Col>

            <Col lg="12" className="mb-5 mt-4">
              <h2 className="related__Product-title">You might also like</h2>
            </Col>

            {relatedProducts.map((item) => (
              <Col lg="3" md="4" sm="6" xs="6" className="mb-4" key={item.id}>
                <ProductCard item={item} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default FoodDetails;
