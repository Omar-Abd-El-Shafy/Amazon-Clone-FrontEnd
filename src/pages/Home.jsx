import React, { useEffect } from "react";
import MainCarousel from "../Components/Carousel/Carousel";
import Categorier from "../Components/Categories/Category";
import ProHome from "../Components/Products/Products";
import { Helmet } from "react-helmet-async";
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
            <ProHome pagination={true} />
        </>
    );
};

export default Home;
