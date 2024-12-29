import { useDispatch, useSelector } from "react-redux";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import Banner from "../components/UI/Banner";
import { removeFromCart, updateQuantity } from "../store/cartSlice"; // Import updateQuantity action
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
    <div>
      <Banner title="Cart" />
      <section>
        <Container>
          <Row>
            <Col lg="12">
              {cartItems.length === 0 ? (
                <h5 className="text-center">Your cart is empty</h5>
              ) : (
                <table className="table">
                  <thead>
                    <tr >
                        <th style={{ paddingLeft: "20px" }}>Image</th>
                      <th style={{ paddingLeft: "110px" }}>Product Title</th>
                      <th style={{ paddingLeft: "100px" }}>Price</th>
                      <th style={{ paddingLeft: "100px" }}>Quantity</th>
                      <th style={{ paddingLeft: "100px" }}>Delete</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartItems.map((item) => (
                      <Tr
                        item={item}
                        key={item.id}
                        onDelete={handleDeleteItem}
                        onIncrement={handleIncrement}
                        onDecrement={handleDecrement}
                      />
                    ))}
                  </tbody>
                </table>
              )}

              <div className="mt-4">
                <h6>
                  Subtotal: $
                  <span className="cart__subtotal">{totalAmount.toFixed(2)}</span>
                </h6>
                <p>Taxes and shipping will calculate at checkout</p>
                <div className="cart__page-btn">
                  <Link to="/foods">
                    <button className="addTOCart__btn me-4">
                      Continue Shopping
                    </button>
                  </Link>
                  <Link to="/checkout">
                    <button className="addTOCart__btn">
                      Proceed to checkout
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

const Tr = ({ item, onDelete, onIncrement, onDecrement }) => {
  const { id, image01, title, price, quantity } = item;

  return (
    <tr className="Tr">
      <td className="text-center cart__img-box" >
        <img src={image01} alt={title} />
      </td>
      <td className="text-center" style={{ paddingTop: "20px" }}>{title}</td>
      <td className="text-center" style={{ paddingTop: "20px" }}>${price.toFixed(2)}</td>
      <td className="text-center">
        <div className="quantity-controls">
          <span className="quantity-btn" onClick={() => onIncrement(id)}>
            <i className="ri-add-line"></i>
          </span>
          <span className="quantity">{quantity}</span>
          <span className="quantity-btn" onClick={() => onDecrement(id)}>
            <i className="ri-subtract-line"></i>
          </span>
        </div>
      </td>
      <td className="text-center cart__item-del" style={{ paddingTop: "20px" }}>
        <i className="ri-delete-bin-line" onClick={() => onDelete(id)}></i>
      </td>
    </tr>
  );
};

export default CartPage;
