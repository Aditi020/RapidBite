// ProductCard.jsx
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../store/cartSlice"; // import the action
import "../../styles/Productcard.css";

const ProductCard = (props) => {
  const { id, title, image01, price } = props.item;
  const dispatch = useDispatch();

  const [isAnimating, setIsAnimating] = useState(false);

  const handleAddToCart = () => {
    // Trigger animation
    setIsAnimating(true);

    // Add to cart after animation
    setTimeout(() => {
      dispatch(
        addToCart({
          id,
          title,
          image01,
          price,
        })
      );
      setIsAnimating(false); // Reset animation
    }, 800); // Match animation duration
  };

  return (
    <div className="product__item">
      <div className="product__img">
        <img src={image01} alt="product-img" className="w-50" />
      </div>
      <div className="product__content">
        <h5 className="Title">{title}</h5>
        <div className="d-flex align-items-center justify-content-between">
          <span className="product__price">${price}</span>
          <button
            className={`addTOCart__btn ${isAnimating ? "animating" : ""}`}
            onClick={handleAddToCart}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
