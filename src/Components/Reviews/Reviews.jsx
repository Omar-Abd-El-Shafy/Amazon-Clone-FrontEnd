import React from "react";
import { Container, Row } from "react-bootstrap";
import { useAllProductReviewsQuery } from "../../Redux/Api";
import Loading from "../Loading/Loading";
import Rating from "../Rating/Rating";

const Reviews = ({ id }) => {
    const { data, isLoading, isError } = useAllProductReviewsQuery(id);
    console.log(data);
    return (
        <Container>
            <h4>Customer Reviews</h4>
            {isLoading ? (
                <div>
                    <Loading />
                </div>
            ) : (
                <>
                    {data.map((rev) => (
                        <Row key={rev.user._id}>
                            <h4>{rev.user.name}</h4>
                            <p>
                                <Rating rating={rev.rating} />
                                {rev.title}
                            </p>
                            <p>{rev.date}</p>
                            <h6>{rev.comment}</h6>
                            <hr />
                        </Row>
                    ))}
                </>
            )}
        </Container>
    );
};

export default Reviews;
