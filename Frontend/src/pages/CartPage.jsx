import { useDispatch, useSelector } from "react-redux";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import Banner from "../components/UI/Banner";
import { removeFromCart, updateQuantity } from "../store/cartSlice";
import "../styles/CartPage.css";

const CartPage = () => {
  const dispatch = useDispatch();
  const { cartItems, totalAmount } = useSelector((state) => state.cart);

  const handleDeleteItem = (id) => {
    dispatch(removeFromCart({ id }));
  };

  const handleIncrement = (id) => {
    dispatch(updateQuantity({ id, type: "increment" }));
  };

  const handleDecrement = (id) => {
    dispatch(updateQuantity({ id, type: "decrement" }));
  };

  return (
    <div className="cart-page">
      <Banner title="Cart" />
      <section className="shopping-cart">
        <Container>
          <Row>
            <Col lg="12">
              {cartItems.length === 0 ? (
                <h5 className="empty-cart-msg">Your cart is empty!</h5>
              ) : (
                <div className="cart-items-container">
                  {cartItems.map((item) => (
                    <CartItem
                      key={item.id}
                      item={item}
                      onDelete={handleDeleteItem}
                      onIncrement={handleIncrement}
                      onDecrement={handleDecrement}
                    />
                  ))}
                </div>
              )}

              <div className="cart-summary">
                <h6>
                  Subtotal: $
                  <span className="cart__subtotal">{totalAmount.toFixed(2)}</span>
                </h6>
                <p>Taxes and shipping will be calculated at checkout</p>
                <div className="cart-btn-group">
                  <Link to="/foods">
                    <button className="cart-btn continue-shopping-btn">
                      Continue Shopping
                    </button>
                  </Link>
                  <Link to="/checkout">
                    <button className="cart-btn checkout-btn">
                      Proceed to Checkout
                    </button>
                  </Link>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

const CartItem = ({ item, onDelete, onIncrement, onDecrement }) => {
  const { id, image01, title, price, quantity } = item;

  return (
    <div className="cart-item">
      <img src={image01} alt={title} className="item-image" />
      <div className="item-details">
        <h5 className="product-name">{title}</h5>
        <p className="product-price">${price.toFixed(2)}</p>
        <div className="quantity-control">
          <button className="quantity-btn" onClick={() => onDecrement(id)}>
            -
          </button>
          <span className="quantity">{quantity}</span>
          <button className="quantity-btn" onClick={() => onIncrement(id)}>
            +
          </button>
        </div>
      </div>
      <div className="item-actions">
        <p className="total-price">${(price * quantity).toFixed(2)}</p>
        <button className="delete-btn" onClick={() => onDelete(id)}>
          <i className="ri-delete-bin-line"></i>
        </button>
      </div>
    </div>
  );
};

export default CartPage;
