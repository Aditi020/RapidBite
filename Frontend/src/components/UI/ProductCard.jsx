import React from "react";
import { Link } from "react-router-dom";
import "../../styles/Productcard.css";

const ProductCard = (props) => {
  const { id, title, image01, price, onAddToCart } = props.item;

  const handleAddToCart = () => {
    if (onAddToCart) {
      onAddToCart({
        id,
        title,
        image01,
        price,
      });
    }
  };

  return (
    <div className="product__item">
      <Link to={`/foods/${id}`} className="Food-Details">
      <div className="product__img">
        <img src={image01} alt="product-img" className="w-50" />
      </div>
      </Link >
      <div className="product__content">
        <Link to={`/foods/${id}`} className="Food-Details">
        <h5 className="Title">
          {title}
        </h5>
        </Link >
        <div className="d-flex align-items-center justify-content-between">
          <span className="product__price">${price}</span>
          <button className="addTOCart__btn" onClick={handleAddToCart}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
