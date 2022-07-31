import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import logoMain from "../assets/imgs/logo/Amazon-logo-main.png";

import { login } from "../Redux/userSlice";

export default function Login(props) {
  props.funcNav(false);
  const [emailorphone, setEmailorphone] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const loggedInUser = useSelector((state) => state.user.loggedInUser);

  const dispatch = useDispatch();

  useEffect(() => {
    if (loggedInUser) {
      console.log("user is loggedin");
      //navigate(`/${loggedInUser.name}/products`);
    } else {
      console.log(loggedInUser);
    }
  }, [loggedInUser, navigate]);

  const loginn = () => {
    dispatch(login({ email: emailorphone, password }));
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
        <label for="name">Email or mobile phone number</label>
        <input
          type="text"
          id="name"
          placeholder=""
          value={emailorphone}
          onChange={(e) => setEmailorphone(e.target.value)}
        />
        <label for="password">Password</label>
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
    </>
    
    );
}
