import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { useAllProductReviewsQuery } from '../../Redux/Api';
import Rating from '../Rating/Rating';

const Reviews = ({ id }) => {
  const { data, isLoading, isError } = useAllProductReviewsQuery(id);
  console.log(data);
  return (
    <Container>
      <Row>
        <h4>Customer Reviews</h4>
        <Rating />
        <h4>user Name</h4>
        <h6>title</h6>
        <p>comment</p>
      </Row>
    </Container>
  );
};

export default Reviews;
