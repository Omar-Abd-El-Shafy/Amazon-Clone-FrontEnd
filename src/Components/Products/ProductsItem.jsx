import React from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Rating from "../Rating/Rating";
import Card from "react-bootstrap/Card";
import { Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { useAddToCartMutation } from "../../Redux/Api";
import { toast } from 'react-toastify';

const ProductsItem = ({ product }) => {
    const navigate = useNavigate();

    //addProduct
    const [addToCart] = useAddToCartMutation();
    const loggedInUser = useSelector((state) => state.user?.loggedInUser);
    const handleAddToCart = (product) => {
        if (loggedInUser) {
            addToCart({
                token: loggedInUser.token,
                body: {
                    product_id: product._id,
                    flag: 1,
                },
            } );
      toast.success(`  ${product.name} add to cart`, {});
            
        } else {
            navigate("/login");
        }
    };

    return (
        <Col sm={6} md={4} lg={3} className="mb-3 ">
            <Card
                className="shadow border-0 rounded-5 bg-warning bg-opacity-10"
                style={{ height: "100%" }}
            >
                <Link to={`/product/one/${product._id}`}>
                    <Card.Img
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
                    className="cardBody"
                >
                    <Link to={`/product/one/${product._id}`}>
                        <Card.Title>{product.name}</Card.Title>
                    </Link>
                    <Rating rating={product.rating} />
                    <Card.Text
                        style={{
                            fontSize: "28px",
                            fontWeight: "400",
                        }}
                    >
                        EGP {product.price}
                    </Card.Text>
                    {product.stock > 0 ? (
                        <Button
                            variant="warning"
                            onClick={() => handleAddToCart(product)}
                        >
                            Add to Cart
                        </Button>
                    ) : (
                        <Button disabled variant="secondary">
                            out of stock
                        </Button>
                    )}
                </Card.Body>
            </Card>
        </Col>
    );
};

export default ProductsItem;
