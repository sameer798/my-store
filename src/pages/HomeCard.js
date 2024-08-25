import React from 'react'
import { Row, Col, Card, Container } from 'react-bootstrap';
import images from '../assets/images1.jpeg'
import classes from './HomeCard.module.css'

const HomeCard = () => {
    const cards = [
        { title: 'Ethnic Wear', text: '30-60% OFF', image: images},
        { title: 'Western Wear', text: '40-50% OFF', image: images},
        { title: 'Sportswear', text: '20-60% OFF', image: images},
        { title: 'Watches', text: '50-60% OFF', image: images },
        { title: 'Footwear', text: '60-80% OFF',image: images },
    ];

    return (
        <>
        <Container className='mt-4'>
            <Row>
                <Col><p style={{fontWeight: "700"}}>Shop By Category</p></Col>
            </Row>
        </Container>
        <div className={classes.container}>
            <Row className={classes.row}>
            {cards.map((card, index) => (
                <Col key={index} xs={12} sm={6} md={4} lg={2} className={classes.col}>
                    <Card style={{ width: "20rem"}}>
                    <Card.Img variant="top" src={card.image} />
                        <Card.Body style={{backgroundColor: "#D9008D", color: "white"}}>
                            <Card.Title>{card.title}</Card.Title>
                            <Card.Text>{card.text}</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            ))}
        </Row>
        </div>
        </>
    );
}

export default HomeCard