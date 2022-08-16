import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { Link } from "react-router-dom";
import Rating from "../Components/Rating/Rating";
import Button from "react-bootstrap/Button";
import { addToCart } from "../Redux/cartSlice";
import { useDispatch } from "react-redux";

export default function SearchResults() {
    let param = useParams();
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(null);
    const [sortBy, setSortBy] = useState("");
    const dispatch = useDispatch();
    const handleAddToCart = (product) => {
        dispatch(addToCart(product));
    };
    useEffect(() => {
        axios
            .get(
                `https://amazon-clone-deploy.herokuapp.com/product/search?name=${param.search}&sortBy=${sortBy}`
            )
            .then((res) => {
                setProducts(res.data.products);
                setError(null);
            })
            .catch(() => {
                setError(`No products found for ${param.search}`);
            });
    }, [param.search, sortBy]);
    const handleSelect = (e) => {
        setSortBy(e);
    };
    return (
        <>
            <h3>
                {products.length} Results for
                <span className="paramSearch"> {param.search}</span>
            </h3>
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
                            <Col sm={6} md={4} lg={3} className="mb-3 ">
                                <Card
                                    className="shadow border-0 rounded-5 bg-warning bg-opacity-10"
                                    style={{ height: "100%" }}
                                    key={product._id}
                                >
                                    <Link to={`/product/one/${product._id}`}>
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
                                        <Link
                                            to={`/product/one/${product._id}`}
                                        >
                                            <Card.Title>
                                                {product.name}
                                            </Card.Title>
                                            <span className="text-secondary">
                                                {product.category.name}
                                            </span>
                                        </Link>
                                        <Rating
                                            rating={product.rating}
                                            Reviews={product.rating}
                                        />
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
                                                onClick={() =>
                                                    handleAddToCart(product)
                                                }
                                            >
                                                Add to Cart
                                            </Button>
                                        ) : (
                                            <Button
                                                variant="secondary"
                                                onClick={() =>
                                                    handleAddToCart(product)
                                                }
                                            >
                                                Add to Cart
                                            </Button>
                                        )}
                                    </Card.Body>
                                </Card>
                            </Col>
                            // <Col key={product._id}>
                            //     <Card className="h-100 shadow border-0">
                            //         <Link to={`product/one/${product._id}`}>
                            //             <Card.Img
                            //                 variant="top"
                            //                 className="img-fluid w-100 m-auto searchImg"
                            //                 src={product.image_path[0]}
                            //             />
                            //         </Link>
                            //         <Card.Body
                            //             style={{
                            //                 display: "flex",
                            //                 flexDirection: "column",
                            //                 alignItems: "center",
                            //                 justifyContent: "space-between",
                            //                 textAlign: "center",
                            //             }}
                            //         >
                            //             <Link to={`/product/${product._id}`}>
                            //                 <Card.Title>
                            //                     {product.name}
                            //                 </Card.Title>
                            //             </Link>
                            //             <Card.Text>
                            //                 Rate: {product.rating}
                            //             </Card.Text>
                            //             <Card.Text
                            //                 style={{
                            //                     fontSize: "28px",
                            //                     fontWeight: "400",
                            //                 }}
                            //             >
                            //                 {product.price} $
                            //             </Card.Text>
                            //         </Card.Body>
                            //     </Card>
                            // </Col>
                        );
                    })
                ) : (
                    <h1 className="w-50 m-auto">{error}</h1>
                )}
            </Row>
        </>
    );
}
