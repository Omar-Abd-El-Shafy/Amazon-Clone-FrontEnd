import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import ButtonGroup from "react-bootstrap/ButtonGroup";

export default function SearchResults() {
    let param = useParams();
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(null);
    const [sortBy, setSortBy] = useState("");
    useEffect(() => {
        axios
            .get(
                `https://amazon-clone-deploy.herokuapp.com/product/search?name=${param.search}&sortBy=${sortBy}`
            )
            .then((res) => {
                setProducts(res.data.products);
                setError(null);
                console.log(res.data.products);
            })
            .catch((err) => {
                setError(err.message);
            });
    }, [param.search, sortBy]);
    const handleSelect = (e) => {
        setSortBy(e);
    };
    return (
        <>
            <h1>Search Results</h1>
            <div className="SearchCategory">
                <DropdownButton
                    as={ButtonGroup}
                    key="warning"
                    id="dropdown-variants-warning"
                    variant="warning"
                    title="Sort By"
                    onSelect={handleSelect}
                >
                    <Dropdown.Item eventKey="Price%3A%20Low%20to%20High">
                        Price: Low to High
                    </Dropdown.Item>
                    <Dropdown.Item eventKey="Price%3A%20High%20to%20Low">
                        Price: High to Low
                    </Dropdown.Item>
                    <Dropdown.Item eventKey="Avg.%20Customer%20review">
                        Avg. Customer review
                    </Dropdown.Item>
                </DropdownButton>
            </div>
            <Row xs={1} md={4} className="g-4 mt-5">
                {products && !error ? (
                    products.map((product) => {
                        return (
                            <Col key={product._id}>
                                <Card className="h-100">
                                    <Card.Img
                                        variant="top"
                                        className="img-fluid w-75 h-100 m-auto searchImg"
                                        src={product.image_path[0]}
                                    />
                                    <hr />
                                    <Card.Body>
                                        <Card.Title>{product.name}</Card.Title>
                                        <Card.Text>{product.rating}</Card.Text>
                                        <Card.Text>{product.price} $</Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        );
                    })
                ) : (
                    <h1 className="w-50 m-auto">{error}</h1>
                )}
            </Row>
        </>
    );
}
