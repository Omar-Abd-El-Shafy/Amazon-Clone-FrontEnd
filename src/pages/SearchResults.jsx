import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

export default function SearchResults() {
    let param = useParams();
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(null);
    useEffect(() => {
        axios
            .get(
                `https://amazon-clone-deploy.herokuapp.com/product/search?name=${param.search}`
            )
            .then((res) => {
                setProducts(res.data);
            })
            .catch((err) => {
                setError(err.message);
            });
    }, [products, error, param.search]);
    return (
        <div>
            <h1>Search Results</h1>
            <Row xs={1} md={4} className="g-4">
                {products && !error ? (
                    products.map((product) => {
                        return (
                            <Col key={product._id}>
                                <Card>
                                    <Card.Img
                                        variant="top"
                                        className="img-fluid w-75 m-auto"
                                        src={product.image_path[0]}
                                    />
                                    <hr />
                                    <Card.Body>
                                        <Card.Title>{product.name}</Card.Title>
                                        <Card.Text>{product.rating}</Card.Text>
                                        <Card.Text>{product.price}</Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        );
                    })
                ) : (
                    <h1 className="w-50 m-auto">{error}</h1>
                )}
            </Row>
        </div>
    );
}
