import React from 'react';
import { useGetSingleProdactQuery } from '../Redux/Api';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Rating from '../Components/Rating/Rating';
import Loading from '../Components/Loading/Loading';
import Error from '../Components/Error/Error';
import { addToCart } from '../Redux/cartSlice';
import { Helmet } from 'react-helmet-async';
import Card from 'react-bootstrap/Card';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import ListGroup from 'react-bootstrap/ListGroup';
import Badge from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { addToFavourites, removeFromFavourites } from '../Redux/favouriteSlice';

function ProductDetails() {
  const params = useParams();
  const { id } = params;
  const [Selectedimg, SetSelectedImg] = useState();
  const {
    data: product,
    error,
    isLoading: loading,
  } = useGetSingleProdactQuery(id);
  const Dispatch = useDispatch();
  const handleAddToCart = (product) => {
    Dispatch(addToCart(product));
  };
  const navigate = useNavigate();

  console.log(product);
  const [like, setLike] = useState(false);
  const [saved, setSaved] = useState(false);
  const userinfo = useSelector((state) => state.user.loggedInUser);
  const saveShow = (product) => {
    if (userinfo) {
      setLike(!like);
      setSaved(product);
    } else {
      navigate('/login');
    }
  };
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
          {like ? (
            <FaHeart
              className="text-danger"
              onClick={() => Dispatch(removeFromFavourites(product))}
            />
          ) : (
            <FaRegHeart
              className=" text-black"
              onClick={() => Dispatch(addToFavourites(product))}
            />
          )}
        </h5>
        <Col md={5}>
          <img
            style={{ maxWidth: '100%' }}
            src={Selectedimg || product.image_path[0]}
            alt={product.name}
            className="w-75"
          />
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
                  <Col>
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
                          style={{ width: '50px', maxWidth: '50px' }}
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
            <ListGroup.Item className="text-danger fw-bolder">
              price :{product.price} EGP
            </ListGroup.Item>

            <ListGroup.Item>
              products Description :<p>{product.description}</p>
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
                  <ListGroup.Item className='border-0' >
                    price:
                    <span className="text-danger fw-bolder">
                     {product.price} EGP
                    </span>
                  </ListGroup.Item>
                </Row>
              </ListGroup>
              <ListGroup>
                <div className="d-grid">
                  {product.stock > 0 ? (
                    <Button
                      className="rounded-pill "
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
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default ProductDetails;
