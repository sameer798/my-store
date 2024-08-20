import React from 'react'
import { Container, Row, Col, Button } from "react-bootstrap";
import classes from './ProductList.module.css';
import image1 from '../../assets/images1.jpeg';
import image2 from '../../assets/images2.jpeg';
import image3 from '../../assets/images3.jpeg';
import image4 from '../../assets/images4.jpeg';


const items = [
    { id: 1, image: image1, title: "Item 1", description: "Description for item 1", price : 1200 },
    { id: 2, image: image2, title: "Item 2", description: "Description for item 2", price : 1400 },
    { id: 3, image: image3, title: "Item 3", description: "Description for item 3", price : 1600 },
    { id: 4, image: image4, title: "Item 4", description: "Description for item 4", price : 1299 },
    { id: 5, image: image1, title: "Item 1", description: "Description for item 1", price : 999 },
    { id: 6, image: image2, title: "Item 2", description: "Description for item 2", price : 589 },
    { id: 7, image: image3, title: "Item 3", description: "Description for item 3", price : 499 },
    { id: 8, image: image4, title: "Item 4", description: "Description for item 4", price : 499 }
  ];
const ProductList = () => {
  return (
    <Container className={classes.container}>
    <Row>
      {items.map(item => (
        <Col md={3} key={item.id} className="mb-4">
          <div className={classes.item}>
            <img src={item.image} alt={item.title} />
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <p>{item.price}₹</p>
            <Button style={{backgroundColor: "#D9008D", borderStyle: "none"}}>Add to Cart</Button>
          </div>
        </Col>
      ))}
    </Row>
  </Container>
  )
}

export default ProductList