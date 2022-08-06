import React, { useEffect } from "react";
import Categorier from "../Components/Categories/Category";
import MainCarousel from "../Components/Carousel/Carousel";
import Products from "../Components/Products/Products";
import { Helmet } from 'react-helmet-async';

const Home = (props) => {
  useEffect(() => {
    props.funcNav(true);
  }, [props]);
  return (
    <>
      <Helmet>
        <title>Amazon</title>
      </Helmet>
      <MainCarousel />
      <Categorier />
      <Products />
    </>
  );
};

export default Home;
