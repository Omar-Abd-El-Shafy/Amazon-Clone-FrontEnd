import React from "react";
import {
    useDeleteProductMutation,
    useGetSingleProdactQuery,
} from "../Redux/Api";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Rating from "../Components/Rating/Rating";
import Loading from "../Components/Loading/Loading";
import Error from "../Components/Error/Error";
import { addToCart } from "../Redux/cartSlice";
import { Helmet } from "react-helmet-async";
import Card from "react-bootstrap/Card";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import ListGroup from "react-bootstrap/ListGroup";
import Badge from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import { IoTrashOutline } from "react-icons/io5";
import { toast } from "react-toastify";

function ProductDetails() {
    const params = useParams();
    const { id } = params;
    const loggedInUser = useSelector((state) => state.user?.loggedInUser);
    // console.log(loggedInUser.user.role);
    const [Selectedimg, SetSelectedImg] = useState();
    const navigate = useNavigate();
    const {
        data: product,
        error,
        isLoading: loading,
    } = useGetSingleProdactQuery(id);
    const Dispatch = useDispatch();
    const handleAddToCart = (product) => {
        Dispatch(addToCart(product));
    };
    console.log(product);
    // create deleteProduct function
    //   const deleteProduct = () => {
    //       console.log("deleteProduct");
    // };
    const [deleteProduct, { isError }] = useDeleteProductMutation();
    if (loading) {
        return <Loading />;
    }
    if (error) {
        return <Error />;
    }
    if (!product) {
        return null;
    }
    return loading ? (
        <div>
            <Loading />
        </div>
    ) : error ? (
        <Error variant="danger">{error.message}</Error>
    ) : (
        <div className="text-capitalize">
            <Row>
                <Col md={5}>
                    <img
                        style={{ maxWidth: "100%" }}
                        src={Selectedimg || product.image_path[0]}
                        alt={product.name}
                        className="w-75"
                    ></img>
                </Col>
                <Col md={3}>
                    <ListGroup variant="flush">
                        <ListGroup.Item>
                            <Helmet>
                                <title>{product.name}</title>
                            </Helmet>
                            <h1 className="text-secondary">{product.name}</h1>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Row xs={1} md={2} className="">
                                {product.image_path.map((x) => (
                                    <Col key={x}>
                                        <Card className="border-0">
                                            <Button
                                                className="p-0"
                                                type="button"
                                                variant="light"
                                                onClick={() => {
                                                    SetSelectedImg(x);
                                                }}
                                            >
                                                <Card.Img
                                                    variant="topp"
                                                    src={x}
                                                    alt="product"
                                                    style={{
                                                        width: "50px",
                                                        maxWidth: "50px",
                                                    }}
                                                ></Card.Img>
                                            </Button>
                                        </Card>
                                    </Col>
                                ))}
                            </Row>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Rating
                                rating={product.rating}
                                Reviews={product.rating}
                            />
                        </ListGroup.Item>
                        <ListGroup.Item className="text-danger fw-bolder">
                            price :${product.price}
                        </ListGroup.Item>

                        <ListGroup.Item>
                            products Description :<p>{product.description}</p>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            price:
                            <span className="text-danger fw-bolder">
                                ${product.price}
                            </span>
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
                <Col md={3}>
                    <Card>
                        <Card.Body>
                            <ListGroup variant="flush">
                                <Row className="align-items-center">
                                    <Col>status:</Col>
                                    <Col>
                                        {product.stock > 0 ? (
                                            <Badge className=" text-success text-center m-1 p-1 ">
                                                in stock
                                            </Badge>
                                        ) : (
                                            <Badge className=" text-danger text-center m-1 p-1 ">
                                                out of stock
                                            </Badge>
                                        )}
                                    </Col>
                                </Row>
                            </ListGroup>
                            <ListGroup>
                                {/* <Quantity product={product} /> */}
                            </ListGroup>
                            <ListGroup>
                                <div className="d-grid">
                                    {product.stock > 0 ? (
                                        <Button
                                            className="rounded-pill "
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
                                </div>
                            </ListGroup>
                        </Card.Body>
                    </Card>
                    <>
                        {loggedInUser?.user.role === true ? (
                            <Button
                                className="rounded-pill mt-3 d-block ms-auto"
                                variant="danger"
                                onClick={() => {
                                    console.log(product._id);
                                    deleteProduct({
                                        token: loggedInUser.token,
                                        id: product._id,
                                    });
                                    if (!isError) {
                                        toast.success(
                                            `Product Deleted Successfully`,
                                            {
                                                position: "bottom-left",
                                                autoClose: 3000,
                                                hideProgressBar: false,
                                                closeOnClick: true,
                                                pauseOnHover: true,
                                                draggable: true,
                                                progress: undefined,
                                            }
                                        );
                                        navigate("/");
                                    }
                                }}
                            >
                                <IoTrashOutline />
                            </Button>
                        ) : null}
                    </>
                </Col>
            </Row>
        </div>
    );
}

export default ProductDetails;
