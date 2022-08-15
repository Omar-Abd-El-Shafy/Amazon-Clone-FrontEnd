import React, { useEffect } from "react";
import MainCarousel from "../Components/Carousel/Carousel";
import Categorier from "../Components/Categories/Category";
import Products from "../Components/Products/Products";
import { Helmet } from 'react-helmet-async';
// import { useGetProdactCategoriesQuery } from "../Redux/Api";

const Home = (props) => {
  useEffect(() => {
    props.funcNav(true);
  }, [ props ] );
  
    // const {
    //   data: cat,
    //   error,
    //   isLoading: loading,
    // } = useGetProdactCategoriesQuery('62e02d48bd5c5569a70d79b5');
    // console.log('cat');
    // console.log(cat);

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
