import React from "react";
import { addToCart } from "../../Redux/cartSlice";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Rating from "../Rating/Rating";
import { Helmet } from "react-helmet-async";
import Card from "react-bootstrap/Card";
import { Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";

const ProductsItem = ({ product }) => {
    // console.log(product);
    const dispatch = useDispatch();
    const handleAddToCart = (product) => {
        dispatch(addToCart(product));
    };
    return (
        <Col sm={6} md={4} lg={3} className="mb-3 ">
            <Card
                className="shadow border-0 rounded-5 bg-warning bg-opacity-10"
                style={{ height: "100%" }}
            >
                <Link to={`/product/${product._id}`}>
                    <img
                        className="card-img-top p-3"
                        src={product.image_path[0]}
                        alt={product.name}
                    />
                </Link>
                <Card.Body
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "space-between",
                        textAlign: "center",
                        borderRadius: "18px",
                    }}
                >
                    <Link to={`/product/${product._id}`}>
                        <Card.Title>{product.name}</Card.Title>
                        <span className="text-secondary">
                            {product.category.name}
                        </span>
                    </Link>
                    <Rating rating={product.rating} Reviews={product.rating} />
                    <Card.Text
                        style={{
                            fontSize: "28px",
                            fontWeight: "400",
                        }}
                    >
                        ${product.price}
                    </Card.Text>
                    {product.stock > 0 ? (
                        <Button
                            variant="warning"
                            onClick={() => handleAddToCart(product)}
                        >
                            Add to Cart
                        </Button>
                    ) : (
                        <Button
                            variant="secondary"
                            onClick={() => handleAddToCart(product)}
                        >
                            Add to Cart
                        </Button>
                    )}
                </Card.Body>
            </Card>
        </Col>
    );
};

export default ProductsItem;
