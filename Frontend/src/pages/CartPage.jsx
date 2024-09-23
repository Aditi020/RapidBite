import { useContext } from "react";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import Banner from "../components/UI/Banner";
import "..//styles/CartPage.css";
import { CartContext } from "../store/cartContext"

const CartPage = () => {

  const {
    cartItems,
    deleteItem,
    totalAmount,
  } = useContext(CartContext)

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
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th>Image</th>
                      <th>Product Title</th>
                      <th>Price</th>
                      <th>Quantity</th>
                      <th>Delete</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartItems.map((item) => (
                      <Tr item={item} key={item.id} onDelete={deleteItem} />
                    ))}
                  </tbody>
                </table>
              )}

              { }
              <div className="mt-4">
                <h6>
                  Subtotal: $
                  <span className="cart__subtotal">{totalAmount.toFixed(2)}</span>
                </h6>
                <p>Taxes and shipping will calculate at checkout</p>
                <div className="cart__page-btn">
                  <button className="addTOCart__btn me-4">
                    <Link to="/foods">Continue Shopping</Link>
                  </button>
                  <button className="addTOCart__btn">
                    <Link to="/checkout">Proceed to checkout</Link>
                  </button>
                </div>
              </div>

            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

const Tr = ({ item, onDelete }) => {
  const { id, image01, title, price, quantity } = item;

  return (
    <tr>
      <td className="text-center cart__img-box">
        <img src={image01} alt={title} />
      </td>
      <td className="text-center">{title}</td>
      <td className="text-center">${price.toFixed(2)}</td>
      <td className="text-center">{quantity}</td>
      <td className="text-center cart__item-del">
        <i className="ri-delete-bin-line" onClick={() => onDelete(id)}></i>
      </td>
    </tr>
  );
};

export default CartPage;
