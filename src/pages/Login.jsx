import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import login from "../store/actions/login";
import signup from "../pages/Signup";
import logoMain from "../assets/imgs/logo/Amazon-logo-main.png";

export default function Login() {
    const [emailorphone, setEmailorphone] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    // const loggedInUser = useSelector(
    //     (state) => state.authentication.loggedInUser
    // );

    // const dispatch = useDispatch();
    // useEffect(() => {
    //     if (loggedInUser) {
    //         navigate(`/${loggedInUser.name}/products`);
    //     } else {
    //         console.log(loggedInUser);
    //     }
    // }, [loggedInUser, navigate]);

    // const loginn = () => {
    //     dispatch(login(emailorphone, password));
    // };

    return (
        <div>
            <div className="mb-3 text-center">
                <Link to="/">
                    <img
                        src={logoMain}
                        alt="logo-main"
                        style={{ width: "103px" }}
                    />
                </Link>
            </div>
            <form>
                <h2 className="mb-3 text-center">Sign-In</h2>
                <label for="name">Email or mobile phone number</label>
                <input
                    type="text"
                    id="name"
                    placeholder="Username"
                    // value={emailorphone}
                    // onChange={(e) => setEmailorphone(e.target.value)}
                />
                <label for="pass">Password</label>
                <input
                    type="password"
                    id="pass"
                    placeholder="Password"
                    // value={password}
                    // onChange={(e) => setPassword(e.target.value)}
                />
                {/* <input type="button" value="Login" onClick={loginn} /> */}
                <input
                    type="button"
                    value="Login"
                    className="btn btn-warning"
                />
            </form>
            <div>
                <div className="new-amzn-con">
                    <h5 className="new-to-amazon">New to Amazon?</h5>
                </div>
                <Link
                    to="/signup"
                    className="btn reg-btn d-block m-auto fw-normal"
                >
                    Create your Amazon account
                </Link>
            </div>
        </div>
    );
}
