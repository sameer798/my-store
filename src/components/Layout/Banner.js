import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from './Banner.module.css'; 

const Banner = () => {
  return (
    <Container fluid className={`${styles.banner}`}>
      <Row>
        <Col md={12}>
          <h1>Welcome to My Store</h1>
          <p>
            This is a generics with lot of catogery and genuine products feel
            free to shop here...
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default Banner;
