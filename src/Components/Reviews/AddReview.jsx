import React from 'react';
import { useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useAddReviewMutation } from '../../Redux/Api';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const AddReview = ({ id }) => {
  const loggedInUser = useSelector((state) => state.user?.loggedInUser);
  const [newReview, { isError }] = useAddReviewMutation();
  const navigate = useNavigate();
  const [rating, setRating] = useState();
  const [title, setTitle] = useState();
  const [comment, setComment] = useState();
  console.log(id, rating, title, comment);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (loggedInUser) {
      newReview({
        token: loggedInUser.token,
        body: { id, rating, title, comment },
      });
    } else {
      navigate('/login');
    }
  };
  // onChange={(e) => setFullName(e.target.value)}
  return (
    <Container>
      {/* <h4>Review this product</h4> */}
      <Row>
        <h4>Create Review</h4>
      </Row>
      <Row>Product</Row>
      <Row>
        <Form onSubmit={handleSubmit}>
          <fieldset>
            <Form.Group className="mb-3">
              <Form.Label htmlFor="rating">Add a headline</Form.Label>
              <Form.Control
                id=" title"
                placeholder="What's most important to know?"
                onChange={(e) => setTitle(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label htmlFor="title ">Overall rating</Form.Label>
              <Form.Select
                id="rating "
                onChange={(e) => setRating(e.target.value)}
              >
                {/* <option disabled>Rating</option> */}
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label htmlFor="disabledTextInput">
                Add a written review
              </Form.Label>
              <Form.Control
                id="review"
                placeholder="What did you like or dislike? What did you use this product for?"
                onChange={(e) => setComment(e.target.value)}
              />
            </Form.Group>
            <Button
              onSubmit={handleSubmit}
              className="mb-3 bg-"
              variant="warning"
              type="submit"
            >
              Submit
            </Button>
          </fieldset>
        </Form>
      </Row>
    </Container>
  );
};

export default AddReview;
