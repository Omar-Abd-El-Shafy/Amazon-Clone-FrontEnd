import React, { useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const User = () => {
    const userinfo = useSelector((state) => state.user.loggedInUser);
    const navigate = useNavigate();
    useEffect(() => {
        if (!userinfo) {
            navigate("/");
        }
    }, [userinfo, navigate]);
    // const { user } = userinfo;
    return (
      <Container>
        <Row className="d-flex">
          <Card className="align-items-center m-4" style={{ width: '18rem' }}>
            <Card.Img
              style={{ width: 'fit-content' }}
              variant="top"
              src="https://images-na.ssl-images-amazon.com/images/G/01/x-locale/cs/help/images/gateway/self-service/security._CB659600413_.png"
            />

            <Card.Body className="text-center">
              <Card.Title>your profile</Card.Title>
              <Card.Text>
                Login & security Login & security Edit login, name, and mobile
                number
              </Card.Text>
              <Link to={'/EditProfile'}>
                <Button variant="warning">Edit profile</Button>
              </Link>
            </Card.Body>
          </Card>

          <Card className="align-items-center m-4" style={{ width: '18rem' }}>
            <Card.Img
              style={{ width: '100px' }}
              variant="top"
              src="https://images-na.ssl-images-amazon.com/images/G/01/x-locale/cs/help/images/gateway/self-service/fshub/11_lists._CB654640573_.png"
            />

            <Card.Body className="text-center">
              <Card.Title>saved items</Card.Title>
              <Card.Text className="pt-4">
                view all your Favourite products
              </Card.Text>
              <Link to={'/Favourite'}>
                <Button variant="warning" className="mt-4">
                  Favourite
                </Button>
              </Link>
            </Card.Body>
          </Card>
          <Card className="align-items-center m-4" style={{ width: '18rem' }}>
            <Card.Img
              style={{ width: '100px' }}
              variant="top"
              src="https://images-na.ssl-images-amazon.com/images/G/01/x-locale/cs/help/images/gateway/self-service/fshub/11_lists._CB654640573_.png"
            />

            <Card.Body className="text-center">
              <Card.Title>Orders</Card.Title>
              <Card.Text className="pt-4">view all your Orders</Card.Text>
              <Link to={'/Orders'}>
                <Button variant="warning" className="mt-4">
                  Orders
                </Button>
              </Link>
            </Card.Body>
          </Card>
        </Row>
      </Container>
    );
};

export default User;
