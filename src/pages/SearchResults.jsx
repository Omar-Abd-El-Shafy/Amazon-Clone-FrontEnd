import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { Link } from 'react-router-dom';
import Rating from '../Components/Rating/Rating';
import Products from '../Components/Products/Products';

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
            })
            .catch((err) => {
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
                            <Col key={product._id}>
                                <Card className="h-100 shadow border-0">
                                    <Link to={`product/one/${product._id}`}>
                                        <Card.Img
                                            variant="top"
                                            className="img-fluid w-100 m-auto searchImg"
                                            src={product.image_path[0]}
                                        />
                                    </Link>
                                    <Card.Body
                                        style={{
                                            display: "flex",
                                            flexDirection: "column",
                                            alignItems: "center",
                                            justifyContent: "space-between",
                                            textAlign: "center",
                                        }}
                                    >
                                        <Link to={`/product/${product._id}`}>
                                            <Card.Title>
                                                {product.name}
                                            </Card.Title>
                                        </Link>
                                        <Card.Text>
                                            Rate: {product.rating}
                                        </Card.Text>
                                        <Card.Text
                                            style={{
                                                fontSize: "28px",
                                                fontWeight: "400",
                                            }}
                                        >
                                            {product.price} $
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        );
                    })
                ) : (
                    <h1 className="w-50 m-auto">{error}</h1>
                )}
                {/* {products && !error ? (
                    products.map((product) => {
                        return (
                            <Card
                                className="shadow border-0"
                                // style={{ height: "100%" }}
                                key={product._id}
                            >
                                <Link to={`/product/${product.id}`}>
                                    <img
                                        className="card-img-top"
                                        src={product.image_path[0]}
                                        alt={product.brand}
                                    />
                                </Link>
                                <Card.Body
                                    style={{
                                        display: "flex",
                                        flexDirection: "column",
                                        alignItems: "center",
                                        justifyContent: "space-between",
                                        textAlign: "center",
                                    }}
                                >
                                    <Link to={`/product/${product.id}`}>
                                        <Card.Title>{product.name}</Card.Title>
                                    </Link>
                                    <Rating
                                        rating={product.rating.rating}
                                        Reviews={product.rating.count}
                                    />
                                    <Card.Text>
                                        Rate: {product.rating}
                                    </Card.Text>
                                    <Card.Text
                                        style={{
                                            fontSize: "28px",
                                            fontWeight: "400",
                                        }}
                                    >
                                        {product.price} $
                                    </Card.Text>
                                    <Button
                      className="bg-warning text-dark mt-auto shadow-sm"
                      style={{
                        border: 'none',
                        fontSize: '20px',
                      }}
                      // onClick={handleAddToCart}
                    >
                      Add to Cart
                    </Button>
                                </Card.Body>
                            </Card>
                        );
                    })
                ) : (
                    <h1 className="w-50 m-auto">{error}</h1>
                )} */}
            </Row>
        </>
    );
}
