import React from 'react'
import { Container, Row, Col, Button } from "react-bootstrap";
import classes from './ProductList.module.css';
import cartContext from '../store/cart-context';
import { useContext } from 'react';


const ProductList = () => {
const ctx = useContext(cartContext);

  const addToCartHandler = (id) =>{
    ctx.addItem(id)
  }
  return (
    <Container className={classes.container}>
    <Row>
      {ctx.items.map(item => (
        <Col md={3} key={item.id} className="mb-4">
          <div className={classes.item}>
            <img src={item.image} alt={item.title} />
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <p>{item.price}₹</p>
            <p>{`(Avl-${item.quantity})`}</p>
            <Button style={{backgroundColor: "#D9008D", borderStyle: "none"}} onClick={addToCartHandler.bind(null, item.id)}>Add to Cart</Button>
          </div>
        </Col>
      ))}
    </Row>
  </Container>
  )
}

export default ProductList