import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import login from "../store/actions/login";

export default function Login() {
  const [emailorphone, setEmailorphone] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const loggedInUser = useSelector(
    (state) => state.authentication.loggedInUser
  );

  const dispatch = useDispatch();
  useEffect(() => {
    if (loggedInUser) {
      navigate(`/${loggedInUser.name}/products`);
    } else {
      console.log(loggedInUser);
    }
  }, [loggedInUser, navigate]);

  const loginn = () => {
    dispatch(login(emailorphone, password));
  };

  return (
    <form>
      <input
        type="text"
        placeholder="Username"
        value={emailorphone}
        onChange={(e) => setEmailorphone(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <input type="button" value="Login" onClick={loginn} />
      <Link style={{ margin: "auto" }} to="/register">
        Register
      </Link>
    </form>
  );
}
