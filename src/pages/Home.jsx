import React from 'react';
import MainCarousel from '../Components/home/Carousel';
import Categorier from '../Components/home/Category';
import ProHome from './ProHome';

const Home = () => {
  return (
    <>
      <MainCarousel />
      <Categorier />
      <ProHome />
    </>
  );
};

export default Home;
