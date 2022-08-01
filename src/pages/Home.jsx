import React from 'react';
import Categorier from '../Components/Categories/Category';
import MainCarousel from '../Components/Carousel/Carousel';
import Products from '../Components/Products/Products';

const Home = () => {
  return (
    <>
      <MainCarousel />
      <Categorier />
      <Products />
    </>
  );
};

export default Home;
