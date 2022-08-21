import React from "react";
import { about } from "../data";
import { Helmet } from "react-helmet-async";
import Card from "react-bootstrap/Card";

const About = () =>
{
    window.scrollTo({
      top: 100,

      behavior: 'smooth',
    });
    return (
        <div style={{ borderRadius: "1.5rem" }} className={""}>
            <Helmet>
                <title>About Amazon</title>
            </Helmet>
            {about.map((item) => (
                <Card
                    key={item.id}
                    style={{ borderRadius: "2rem" }}
                    className={"m-4"}
                >
                    <Card.Body
                        data-aos="fade-right"
                        data-aos-offset="300"
                        data-aos-easing="ease-in-sine"
                    >
                        <Card.Title className="fs-1">{item.title}</Card.Title>
                        <Card.Text>{item.describe}</Card.Text>
                        <Card.Img
                            style={{ borderRadius: "1.5rem" }}
                            data-aos="fade-left"
                            data-aos-offset="350"
                            data-aos-easing="ease-in-sine"
                            variant="bottom"
                            src={item.img}
                            alt={item.title}
                        />
                    </Card.Body>
                </Card>
            ))}
        </div>
    );
};

export default About;
