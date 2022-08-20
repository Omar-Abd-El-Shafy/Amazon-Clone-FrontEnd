import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { Helmet } from 'react-helmet-async';
import { useSelector } from 'react-redux';
import Error from '../Components/Error/Error';
import Loading from '../Components/Loading/Loading';
import { useGetAllOrderQuery } from '../Redux/Api';
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';

const Orders = () => {
  const loggedInUser = useSelector((state) => state.user?.loggedInUser);

  const { data, isLoading, error } = useGetAllOrderQuery(loggedInUser.token);
  console.log(data);
  return (
    <Container>
      <Helmet>
        <title>Orders</title>
      </Helmet>
      <h4>Your Orders</h4>
      {isLoading ? (
        <Loading />
      ) : error ? (
        <Error error={error.message} />
      ) : (
        <>
          {data.map((item) => (
            <Card key={item._id}>
              <Row className="m-0  bg-secondary bg-opacity-10">
                <Col md={8} className=" d-flex justify-content-between">
                  <Card.Text>
                    ORDER PLACED: <strong>{item.createdAt}</strong>
                  </Card.Text>
                  <Card.Text>
                    Totle:<strong> {item.bill}EGP</strong>
                  </Card.Text>
                  <Card.Text>
                    status:<strong>{item.status}</strong>
                  </Card.Text>
                </Col>
                <Col md={3} className=" text-end">
                  deliveryAddress:<strong>{item.deliveryAddress.city}</strong>
                </Col>
              </Row>
              <Row className="m-0 p-1">Delivered {item.deliveryDate}</Row>
              {item.products.map((x) => (
                <Row className="m-0 p-1">
                  <Card.Img style={{width:'50px'}} src={x.productBrief.image_path} />
                </Row>
              ))}
            </Card>
          ))}
        </>
      )}
    </Container>
  );
};

export default Orders;
