import React from "react";
import { Button, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useAllProductReviewsQuery } from "../../Redux/Api";
import Loading from "../Loading/Loading";
import Rating from "../Rating/Rating";

const Reviews = ({ id }) => {
    const { data, isLoading } = useAllProductReviewsQuery(id);
    const loggedInUser = useSelector((state) => state.user?.loggedInUser);
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
                            <>
                                {loggedInUser?.user.role === true ? (
                                    <Button
                                        className="rounded-pill my-3 d-block"
                                        variant="danger"
                                        onClick={() => {
                                            console.log();
                                            // deleteReview({
                                            //     token: loggedInUser.token,
                                            //     id: product._id,
                                            // });
                                            // if (!isError) {
                                            //     toast.success(
                                            //         `Product Deleted Successfully`,
                                            //         {
                                            //             position: "bottom-left",
                                            //             autoClose: 3000,
                                            //             hideProgressBar: false,
                                            //             closeOnClick: true,
                                            //             pauseOnHover: true,
                                            //             draggable: true,
                                            //             progress: undefined,
                                            //         }
                                            //     );
                                            // }
                                        }}
                                    >
                                        {/* <IoTrashOutline /> Delete Product */}
                                        Delete Review
                                    </Button>
                                ) : null}
                            </>
                            <hr />
                        </Row>
                    ))}
                </>
            )}
        </Container>
    );
};

export default Reviews;
