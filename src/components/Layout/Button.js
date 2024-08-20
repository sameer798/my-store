import React from 'react'
import { Button, Container, Row, Col } from "react-bootstrap";

const CartButton = () => {
  return (
    <Container>
       <Row className="justify-content-center">
        <Col xs="auto">
          <Button style={{ backgroundColor: "#D9008D", borderStyle: "none" }}>Show the Cart</Button>
        </Col>
      </Row>
    </Container>
  )
}

export default CartButton