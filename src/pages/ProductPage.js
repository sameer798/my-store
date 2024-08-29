import React, { useContext } from 'react';
import cartContext from '../components/store/cart-context';
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import classes from './ProductPage.module.css'

const ProductPage = () => {
   const ctx = useContext(cartContext);
   

    const params = useParams();
    const item = ctx.items.find(product => product.id === params.productId)
    
    
  const product = {
    title: item.title,
    price: item.price,
    description: item.description,
    rating: item.rating,
    imageUrl: item.image,
  };

  return (
    <Container>
      <Row className="my-5">
        <Col md={6} className={classes.imageCol}>
          <Image src={product.imageUrl} alt={product.name} fluid />
          <Button variant="primary" className="mt-3" block>Add to Cart</Button>
        </Col>
        <Col md={6}>
          <h2>{product.name}</h2>
          <h4>₹-{product.price}</h4>
          <p>{product.description}</p>
          <p>Rating: {product.rating} / 5</p>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductPage;
