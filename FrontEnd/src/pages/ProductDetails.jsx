import React, { useEffect, useReducer } from "react";
import Rating from "../Components/Rating/Rating";
import Loading from "../Components/Loading/Loading";
import Error from "../Components/Error/Error";
import axiosInstance from "../network/axiosInstansce";
import { useParams } from "react-router-dom";
import reducer from "../network/FecthingData";
import logger from "use-reducer-logger";
import Card from "react-bootstrap/Card";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import ListGroup from "react-bootstrap/ListGroup";
import Badge from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";

function ProductDetails() {
    const params = useParams();
    const { id } = params;
    // console.log(params);
    const [{ data: product, loading, error }, dispatch] = useReducer(
        logger(reducer),
        {
            product: [],
            loading: true,
            error: "",
        }
    );
    useEffect(() => {
        axiosInstance
            .get(`/products/${params.id}`)
            .then((res) => {
                console.log(res);
                console.log(product);
                dispatch({ type: "FETCH-REQUEST" });
                dispatch({ type: "FETCH-SUCESS", payload: res.data });
            })
            .catch((err) => {
                dispatch({ type: "FEACH-FALE", payload: err.message });
            });
    }, [id, params.id, product]);

    return loading ? (
      <Loading />
    ) : error ? (
      <Error variant="danger">{error}</Error>
    ) : (
      <div>
        <Row>
          <Col md={5}>
            <img
              style={{ maxWidth: '100%' }}
              src={product.image}
              alt={product.title}
              className="w-75"
            ></img>
          </Col>
          <Col md={3}>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <h1 className="text-secondary">{product.title}</h1>
                <Rating
                  rating={product.rating.rate}
                  Reviews={product.rating.count}
                />
              </ListGroup.Item>
              <ListGroup.Item>price :${product.price}</ListGroup.Item>

              <ListGroup.Item>
                products Description :<p>{product.description}</p>
              </ListGroup.Item>
              <ListGroup.Item>
                price:
                <span style={{ color: 'red' }}>${product.price}</span>
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col md={3}>
            <Card>
              <Card.Body>
                <ListGroup variant="flush">
                  <Row className="align-items-center">
                    <Col>satus:</Col>
                    <Col>
                      {product.rating.count > 0 ? (
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
                  <div className="d-grid">
                    {product.rating.count > 0 ? (
                      <Button className="rounded-pill " variant="warning">
                        Add to Cart
                      </Button>
                    ) : (
                      <Button variant="secondary">Add to Cart</Button>
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
