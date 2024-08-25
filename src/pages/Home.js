import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import image1 from '../assets/images1.jpeg';
import image2 from '../assets/images2.jpeg';
import image3 from '../assets/images1.jpeg';
import classses from './Home.module.css';
import HomeCard from './HomeCard';

const Home = () => {
    return (
        <>
       <div className={classses['carousel-container']}>
         <Carousel className='mt-3 mb-3'>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={image1}
                    alt="First slide"
                    style={{ maxHeight: '400px', width: "100%", objectFit: 'cover', objectPosition: "center" }}
                />
                <Carousel.Caption>
                    <h3>First Slide Label</h3>
                    <p>Description for the first slide.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={image2}
                    alt="Second slide"
                    style={{ maxHeight: '400px', width: "100%", objectFit: 'cover', objectPosition: "center" }}
                />
                <Carousel.Caption>
                    <h3>Second Slide Label</h3>
                    <p>Description for the second slide.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={image3}
                    alt="Third slide"
                    style={{ maxHeight: '400px', width: "100%", objectFit: 'cover', objectPosition: "center" }}
                />
                <Carousel.Caption>
                    <h3>Third Slide Label</h3>
                    <p>Description for the third slide.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
       </div>
       <HomeCard/>
       </>
    );
}

export default Home;
