import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { Slider } from '../../data';
import '../../index.css';
const MainCarousel = () => {
  return (
    <Carousel
      className='top'
      interval={1000}
      variant="dark"
      style={{
        width: 'inherit',
        height: 'inherit',
        marginTop: '10px',
        marginBottom: '10px',
      }}
    >
      {Slider.map((slide) => (
        <Carousel.Item
          key={slide.id}
          style={{ objectFit: 'fill', width: '100%' }}
        >
          <img
            style={{ objectFit: 'contain', width: '100%' }}
            src={slide.img}
            alt="First slide"
          />
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default MainCarousel;

// {
//   Slider.map((slide) => (
//     <img
//       key={slide.id}
//       className="d-block w-100 top"
//       src={slide.img}
//       alt="First slide"
//     />
//   ));
// }
