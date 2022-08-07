import React from "react";
import NotFoundImage from "../../assets/imgs/logo/Not-Found.png";
import Container from "react-bootstrap/esm/Container";
import { Link } from "react-router-dom";
const NoTFound = () => {
    return (
        <Container>
            <Link to="/" className="d-block text-center">
                <img src={NotFoundImage} alt="notFound" className="mt-5 w-50" />
            </Link>
        </Container>
    );
};

export default NoTFound;
