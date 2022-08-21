import React from "react";
import { toast } from "react-toastify";
import { userSliceActions } from "../../Redux/userSlice";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { BiShow, BiHide } from "react-icons/bi";
import { Helmet } from "react-helmet-async";
import { Button, Container, Form, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { RiArrowGoBackFill } from "react-icons/ri";

const Updatepass = () => {
    const [password, setPassword] = useState("");
    const [confirm_password, setConfirmPassword] = useState("");
    // console.log(confirm_password);
    // console.log(password);
    const [isRevealedPassword, setIsRevealedPassword] = useState(false);
    const token = useSelector((state) => state.user.loggedInUser?.token);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const updateHandler = (e) => {
        e.preventDefault();
        dispatch(
            userSliceActions.updateUserPassword({
                password,
                token,
                confirm_password,
            })
        );
        toast.success(`Password updated Successfully`, {
            position: "bottom-left",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
        navigate("/EditProfile");
    };
    return (
        <Container style={{ maxWidth: "600px" }}>
            <Row>
                <Link to={"/EditProfile"}>
                    <h1>
                        back to your account {"  "}
                        <RiArrowGoBackFill />
                    </h1>
                </Link>
                <hr />
            </Row>
            <Form>
                <Helmet>
                    <title>Edit profile information </title>
                </Helmet>

                <h4 className="text-dark"> Change your password</h4>
                <Form.Text className="text-muted">
                    If you want to change the password associated with your
                    Amazon customer account, you may do so below. Be sure to
                    click the Save Changes button when you are done.
                </Form.Text>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>user password</Form.Label>
                    <Form.Control
                        type={isRevealedPassword ? "text" : "password"}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <Form.Text className="text-dark">
                        <div
                            className="passwordToggleUpdatePass"
                            variant="outline-dark"
                            onClick={() =>
                                setIsRevealedPassword(!isRevealedPassword)
                            }
                        >
                            {isRevealedPassword ? <BiHide /> : <BiShow />}
                        </div>
                    </Form.Text>
                    <Form.Label>Confirm password</Form.Label>
                    <Form.Control
                        type={"password"}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                    <Form.Text className="text-dark">
                        <div
                            className="passwordToggleUpdatePass"
                            variant="outline-dark"
                        ></div>
                    </Form.Text>

                    <Button
                        onClick={updateHandler}
                        className="mt-2 shadow bg-warning bg-gradient"
                        variant="warning"
                        type="submit"
                    >
                        Save changes
                    </Button>
                </Form.Group>
            </Form>
        </Container>
    );
};
export default Updatepass;
