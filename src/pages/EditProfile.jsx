import Modal from "react-bootstrap/Modal";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Loading from "../Components/Loading/Loading";
import ListGroup from "react-bootstrap/ListGroup";
import { Helmet } from "react-helmet-async";
import { Button, Container } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import UpdateName from "../Components/user/UpdateName";
import Error from "../Components/Error/Error";
import axios from "axios";
import { toast } from "react-toastify";

function EditProfile() {
    const navigate = useNavigate();
    const userinfo = useSelector((state) => state.user.loggedInUser);
    if (!userinfo) {
        navigate("/login");
    }
    const { user } = userinfo;
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const deleteUser = async () => {
        axios
            .delete("https://amazon-clone-deploy.herokuapp.com/user", {
                headers: {
                    "x-access-token": `${userinfo.token}`,
                },
            })
            .then((res) => {
                console.log(res);
                toast.error(`Your Account has been deleted Successfully`, {
                    position: "bottom-left",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
                navigate("/");
            })
            .catch((err) => {
                console.log(err);
            });
    };
    return (
      <Container style={{ maxWidth: '600px', textTransform: 'initial' }}>
        <>
          <Helmet>{user.name}</Helmet>

          <h1 className="my-3">Hi {user.name} </h1>
          <ListGroup className="border border-4 rounded-5">
            <ListGroup.Item className="d-flex justify-content-between border border-1">
              <ListGroup.Item style={{ border: 'none' }}>
                user name : {user.name}
              </ListGroup.Item>{' '}
              <Link to={'/UpdateName'}>
                <Button className="btn btn-outline-light border-0 bg-warning text-black">
                  Edit
                </Button>
              </Link>
            </ListGroup.Item>
            <ListGroup.Item className="d-flex justify-content-between">
              <ListGroup.Item style={{ border: 'none' }}>
                your email : {user.email}
              </ListGroup.Item>
              <Link to={'/UpdateEmail'}>
                <Button className="btn btn-outline-light border-0 bg-warning text-black">
                  Edit
                </Button>
              </Link>
            </ListGroup.Item>
            <ListGroup.Item className="d-flex justify-content-between">
              <ListGroup.Item style={{ border: 'none' }}>
                your phone : {user.phone}
              </ListGroup.Item>{' '}
              <Link to={'/UpdatePhone'}>
                <Button className="btn btn-outline-light border-0 bg-warning text-black">
                  Edit
                </Button>
              </Link>
            </ListGroup.Item>
            <ListGroup.Item className="d-flex justify-content-between">
              <ListGroup.Item style={{ border: 'none' }}>
                password :{' '}
                <input
                  className="border-0 text-black"
                  type="password"
                  disabled
                  value={'password'}
                ></input>
              </ListGroup.Item>
              <Link to={'/Updatepass'}>
                <Button className="btn btn-outline-light border-0 bg-warning text-black">
                  Edit
                </Button>
              </Link>
            </ListGroup.Item>
          </ListGroup>
          {/* <Button
                    onClick={deleteUser}
                    className="mt-2 "
                    variant="warning"
                    type="submit"
                >
                    Delete Account
                </Button> */}
          <Button
            variant="danger"
            onClick={handleShow}
            className="d-block text-center mt-4 mb-2"
          >
            Delete Account
          </Button>

          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Removing Account</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              Are you sure you want to{' '}
              <span className="text-danger fw-bold">DELETE</span> your account?
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button  variant="danger" onClick={deleteUser}>
                Delete
              </Button>
            </Modal.Footer>
          </Modal>
        </>
      </Container>
    );
}

export default EditProfile;
