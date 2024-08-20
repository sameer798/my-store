import { Container, Row, Col, Button, Table } from "react-bootstrap";
import Modal from "../Layout/Modal";
import CartItem from "./CartItem";
const Cart = (props) => {
  return (
    <Modal>
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
          <Col style={{ fontWeight: "400" }}>300$</Col>
          <Col>
            <Button className="mx-2">Cancel</Button>
            <Button>Order</Button>
          </Col>
        </Row>
      </Container>
    </Modal>
  );
};
export default Cart;
