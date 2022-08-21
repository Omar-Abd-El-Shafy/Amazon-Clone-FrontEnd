import React from "react";
import { Card, Col } from "react-bootstrap";
const DepartmentItem = ({ item }) => {
    return (
        <Col sm={6} md={4} lg={3} className="mb-3 ">
            <Card
                className="shadow border-0 rounded-5 bg-warning bg-opacity-10"
                style={{ height: "100%" }}
            >
                <Card.Body
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "space-between",
                        textAlign: "center",
                        borderRadius: "18px",
                    }}
                >
                    <Card.Title className="fw-bold text-capitalize">
                        {item.name}
                    </Card.Title>
                    {/* <Card.Img
                        variant="top"
                        src={item.image_path}
                        style={{
                            height: "18rem",
                            width: "100%",
                            objectFit: "cover",
                        }}
                    /> */}
                </Card.Body>
                {/* <Link className="btn " to={`/product/department/${item._id}`}>
                    <small className="text-primary fs-6 cat-btn">
                        show more
                    </small>
                </Link> */}
            </Card>
        </Col>
    );
};

export default DepartmentItem;
