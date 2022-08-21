import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import SuccessImg from "../../assets/imgs/logo/istockphoto-1314758416-612x612.jpg";
const Success = () => {
    useEffect(() => {
        setTimeout(() => {
            window.location.href = "/";
        }, 10000);
    }, []);
    return (
        <Container className="text-center ">
            <h1 className="mt-5">Order succeeded</h1>
            <h5 className="mt-4">
                You will be redirected to home page in 10 seconds
            </h5>
            <img
                src={SuccessImg}
                alt="success"
                className="img-fluid mt-5"
                style={{
                    width: "30%",
                    borderRadius: "20px",
                    boxShadow: "0px 0px 10px #ccc",
                }}
            />
        </Container>
    );
};

export default Success;
