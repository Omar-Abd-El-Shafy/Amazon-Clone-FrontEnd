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
            <Card>
              <Row>
                <Col md={5}>
                  <Card.Text>{item.createdAt}</Card.Text>
                </Col>
                <Col></Col>
              </Row>
              <Row></Row>
            </Card>
          ))}
        </>
      )}
    </Container>
  );
};

export default Orders;
