import React from "react";
import "../../index.css";
import { Slider } from "../../data";
import Carousel from "react-bootstrap/Carousel";
const MainCarousel = () => {
    return (
        <Carousel
            className="top rounded-5"
            interval={3000}
            variant="dark"
            style={{
                width: "inherit",
                maxHeight: "60vh",
                maxWidth: "100%",
                height: "inherit",
            }}
        >
            {Slider.map((slide) => (
                <Carousel.Item key={slide.id} style={{ objectFit: "contain" }}>
                    <img
                        style={{ objectFit: "fill", width: "100%" }}
                        src={slide.img}
                        alt="First slide"
                    />
                </Carousel.Item>
            ))}
        </Carousel>
    );
};

export default MainCarousel;
