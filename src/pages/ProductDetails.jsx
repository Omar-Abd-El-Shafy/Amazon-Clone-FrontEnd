import React from 'react';
import {
  useDeleteProductMutation,
  useGetSingleProdactQuery,
  useAddToCartMutation,
} from '../Redux/Api';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Rating from '../Components/Rating/Rating';
import Loading from '../Components/Loading/Loading';
import Error from '../Components/Error/Error';
import { Helmet } from 'react-helmet-async';
import Card from 'react-bootstrap/Card';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import ListGroup from 'react-bootstrap/ListGroup';
import Badge from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import { IoTrashOutline } from 'react-icons/io5';
import { toast } from 'react-toastify';
import Table from 'react-bootstrap/Table';

import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { addToFavourites, removeFromFavourites } from '../Redux/favouriteSlice';
import Reviews from '../Components/Reviews/Reviews';
import AddReview from '../Components/Reviews/AddReview';
import UpdateProduct from '../Components/Dashboard/UpdateProduct/UpdateProductForm';

function ProductDetails() {
  const params = useParams();
  const { id } = params;
  const loggedInUser = useSelector((state) => state.user?.loggedInUser);
  const [Selectedimg, SetSelectedImg] = useState();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  //get all product
  const {
    data: product,
    error,
    isLoading: loading,
  } = useGetSingleProdactQuery(id);
  //addProduct
  const [addToCart] = useAddToCartMutation();
  const handleAddToCart = (product) => {
    // flag = 0 means decrease , 1 means add
    if (loggedInUser) {
      addToCart({
        token: loggedInUser.token,
        body: {
          product_id: product._id,
          flag: 1,
        },
      });
      toast.success(`  ${product.name} add to cart`, {});

      // addProduct({
      //   token: loggedInUser.token,
      //   body: { quantity: Qty + 1, product_id: product._id },
      // });
      // dispatch(addToCart(product));
    } else {
      navigate('/login');
    }
  };
  //fav
  const [like, setLike] = useState(false);
  const [setSaved] = useState(false);
  const saveShow = (product) => {
    if (loggedInUser) {
      setLike(!like);
      setSaved(product);
    } else {
      navigate('/login');
    }
  };

  //delete Product
  const [deleteProduct, { isError }] = useDeleteProductMutation();

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
        {' '}
        <h5
          onClick={() => {
            saveShow(product);
          }}
        >
          {loggedInUser?.user?.role === true ? (
            <></>
          ) : (
            <>
              {' '}
              {like ? (
                <FaHeart
                  className="text-danger"
                  onClick={() => dispatch(removeFromFavourites(product))}
                />
              ) : (
                <FaRegHeart
                  className=" text-black"
                  onClick={() => dispatch(addToFavourites(product))}
                />
              )}
            </>
          )}
        </h5>
        <Col md={1}>
          <Row xs={1} md={2} className="flex-column">
            {product.image_path.map((x) => (
              <Col key={x}>
                <Card className="border-0 border border-0 bg-transparent">
                  <Button
                    className="border border-0 bg-transparent d-none d-lg-block"
                    type="button"
                    variant="flush"
                    onClick={() => {
                      SetSelectedImg(x);
                    }}
                  >
                    <Card.Img
                      variant="topp"
                      src={x}
                      alt="product"
                      style={{
                        width: '80px',
                        maxWidth: '80px',
                        marginRight: '10px',
                        height: '100px',
                      }}
                    ></Card.Img>
                  </Button>
                </Card>
              </Col>
            ))}
          </Row>
        </Col>
        <Col md={5}>
          <img
            style={{
              maxWidth: '100%',
              maxHeight: '438px',
              marginLeft: '10px',
            }}
            src={Selectedimg || product.image_path[0]}
            alt={product.name}
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
            <ListGroup.Item className="border-0">
              <Row xs={1} md={2} className=" flex-row">
                {product.image_path.map((x) => (
                  <Col key={x}>
                    <Card className="border border-0 bg-transparent p-2 d-lg-none">
                      <Button
                        className="p-0 border border-0 bg-transparent"
                        type="button"
                        variant="flush"
                        onClick={() => {
                          SetSelectedImg(x);
                        }}
                      >
                        <Card.Img
                          variant="topp"
                          src={x}
                          alt="product"
                          style={{
                            width: '50px',
                            maxWidth: '50px',
                            height: '70px',
                          }}
                        ></Card.Img>
                      </Button>
                    </Card>
                  </Col>
                ))}
              </Row>
            </ListGroup.Item>
            <ListGroup.Item>
              <Rating rating={product.rating} Reviews={product.rating} />
            </ListGroup.Item>
            <ListGroup.Item>
              price:
              <span className="text-danger fw-bolder">{product.price} EGP</span>
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
                      <Badge bg="success" className="text-center m-1 p-1 ">
                        in stock
                      </Badge>
                    ) : (
                      <Badge bg="danger" className=" text-center m-1 p-1 ">
                        out of stock
                      </Badge>
                    )}
                  </Col>
                  <ListGroup.Item className="border-0">
                    price:
                    <span className="text-danger fw-bolder">
                      {product.price} EGP
                    </span>
                  </ListGroup.Item>
                </Row>
              </ListGroup>
              {loggedInUser?.user?.role === true ? (
                <></>
              ) : (
                <>
                  <ListGroup>
                    <div className="d-grid">
                      {product.stock > 0 ? (
                        <Button
                          className="shadow bg-warning bg-gradient rounded-pill "
                          variant="warning"
                          onClick={() => handleAddToCart(product)}
                        >
                          Add to Cart
                        </Button>
                      ) : (
                        <Button variant="secondary">out of stock</Button>
                      )}
                    </div>
                  </ListGroup>
                </>
              )}
            </Card.Body>
          </Card>
          <>{loggedInUser?.user.role && <UpdateProduct product={product} />}</>
          <>
            {loggedInUser?.user.role === true ? (
              <Button
                className="rounded-pill my-3 d-block shadow bg-gradien"
                variant="danger"
                onClick={() => {
                  // console.log(product._id);
                  deleteProduct({
                    token: loggedInUser.token,
                    id: product._id,
                  });
                  if (!isError) {
                    toast.success(`Product Deleted Successfully`, {
                      position: 'bottom-left',
                      autoClose: 3000,
                      hideProgressBar: false,
                      closeOnClick: true,
                      pauseOnHover: true,
                      draggable: true,
                      progress: undefined,
                    });
                    navigate('/');
                  }
                }}
              >
                <IoTrashOutline /> Delete Product
              </Button>
            ) : null}
          </>
        </Col>
      </Row>
      <hr />
      <Row className="m-1">
        <Table striped>
          <tbody>
            <tr>
              <td>brand</td>
              <td>{product.brand}</td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td>category</td>
              <td>{product.category.name}</td>
            </tr>
            <tr>
              <td>department</td>
              <td>{product.department.name}</td>
            </tr>
            <tr>
              <td>stock</td>
              <td>{product.stock}</td>
            </tr>
            <tr>
              <td>weight</td>
              <td>{product.weight}</td>
            </tr>
            <tr>
              <td>description</td>
              <td colSpan={3}>{product.description}</td>
            </tr>
          </tbody>
        </Table>
      </Row>
      <hr />
      <Row>
        {loggedInUser?.user?.role === true ? (
          <Col md={6} className=" text-center">
            <h2>Total Reviews</h2>
          </Col>
        ) : (
          <Col md={6}>
            <AddReview id={id} />
          </Col>
        )}
        <Col md={5}>
          <Reviews id={id} />
        </Col>
      </Row>
    </div>
  );
}

export default ProductDetails;
