import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './Style.css';



function CarouselWithImages() {
  return (
    <div>
    <Carousel data-bs-theme="dark" interval={4000}>
      <Carousel.Item>
        <img
           className="d-block w-100 carousel-image"
          src="/assets/image1.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
        <h1 className='text-warning'>Welcome to File Management System!</h1>
          <p className="text-white">It is a software tool designed to facilitate the organization, storage, retrieval, manipulation, and sharing of digital files and documents within an organization or on a computer system. </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 carousel-image"
          src="/assets/image2.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
        <h1 className='text-warning'>Welcome to File Management System!</h1>
          <p className="text-white">It is a software tool designed to facilitate the organization, storage, retrieval, manipulation, and sharing of digital files and documents within an organization or on a computer system. </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
           className="d-block w-100 carousel-image"
          src="/assets/image3.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
        <h1 className='text-warning'>Welcome to File Management System!</h1>
          <p className="text-white">It is a software tool designed to facilitate the organization, storage, retrieval, manipulation, and sharing of digital files and documents within an organization or on a computer system. </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    <section>
      <div>
        
      </div>
    </section>
    </div>
  );
}

export default CarouselWithImages;
