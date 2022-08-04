import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import logoMain from "../assets/imgs/logo/Amazon-logo-main.png";
import { api } from "../Redux/services";

import { userSliceActions } from "../Redux/userSlice";
export let tokenExpirationDate;
export default function Login(props) {
  const [emailorphone, setEmailorphone] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const loggedInUser = useSelector((state) => state.user.loggedInUser);
  const [login, response] = api.useLoginMutation();

  const dispatch = useDispatch();

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("userData"));

    tokenExpirationDate = new Date(
      storedData?.expiration || new Date().getTime() + 1000 * 60 * 60 * 2
    );
    if (loggedInUser?.userToken) {
      localStorage.setItem(
        "userData",
        JSON.stringify({
          userId: loggedInUser?.id,
          token: loggedInUser?.userToken,
          name: loggedInUser?.userName,
          expiration: tokenExpirationDate.toISOString(),
        })
      );
    }

    props.funcNav(false);

    if (loggedInUser?.userName) {
      console.log("user is loggedin");
      navigate(`/`);
    } else {
      console.log(loggedInUser);
    }
  }, [loggedInUser, navigate, props]);

  const loginn = () => {
    dispatch(userSliceActions.login({ email: emailorphone, password }));
    // login({ email: emailorphone, password })
    //   .then((response) => {
    //     console.log(response);
    //   })
    //   .catch((error) => console.log(error));
  };
  return (
    <>
      <div>
        <div className="mb-3 text-center">
          <a href="/">
            <img src={logoMain} alt="logo-main" style={{ width: "103px" }} />
          </a>
        </div>
        <form>
          <h2 className="mb-3 text-center">Sign-In</h2>
          <label htmlFor="name">Email or mobile phone number</label>
          <input
            type="text"
            id="name"
            placeholder=""
            value={emailorphone}
            onChange={(e) => setEmailorphone(e.target.value)}
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder=""
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type="button"
            value="Login"
            className="btn btn-warning"
            onClick={loginn}
          />
        </form>
      </div>
      <div className="new-amzn-con">
        <h5 className="new-to-amazon">New to Amazon?</h5>
      </div>
      <Link to="/signup" className="btn reg-btn d-block m-auto fw-normal">
        Create your Amazon account
      </Link>
    </>
  );
}
