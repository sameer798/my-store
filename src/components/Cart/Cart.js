import { useContext } from "react";
import { Container, Row, Col, Button, Table } from "react-bootstrap";
import Modal from "../Layout/Modal";
import CartItem from "./CartItem";
import cartContext from "../store/cart-context";
const Cart = (props) => {

 const ctx = useContext(cartContext)
  return (
    <Modal onClose={props.onHideCart}>
      <Container>
        <Row>
          <Col>
            <Table striped hover>
              <thead>
                <tr>
                  <th>Item</th>
                  <th>Quantity</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody>
                    <CartItem/>
              </tbody>
            </Table>
          </Col>
        </Row>
        <Row>
          <Col style={{ fontWeight: "700" }}>Total</Col>
          <Col style={{ fontWeight: "400" }}>{ctx.totalAmount}</Col>
          <Col>
            <Button className="mx-2" variant="secondary" onClick={props.onHideCart}>Cancel</Button>
            <Button style={{ backgroundColor: "#D9008D" }}>Order</Button>
          </Col>
        </Row>
      </Container>
    </Modal>
  );
};
export default Cart;
