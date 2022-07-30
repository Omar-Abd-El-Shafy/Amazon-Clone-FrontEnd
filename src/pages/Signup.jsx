import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
//import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { register } from "../Redux/userSlice";
import logoMain from "../assets/imgs/logo/Amazon-logo-main.png";

export default function Registration(props) {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirm_password: "",
  });

  const [errors, setErrors] = useState({
    nameError: "",
    emailError: "",
    phoneError: "",
    passwordError: "",
    confirmPasswordError: "",
  });
  const [valid, setValid] = useState(false);

  const handleValidation = (field, value) => {
    console.log(field, value);

    if (field === "name") {
      setErrors({
        ...errors,
        nameError:
          value.length === 0
            ? "This field is required"
            : !/^[a-z ,.'-]+$/i.test(value)
            ? "Not valid name"
            : null,
      });
    } else if (field === "email") {
      setErrors({
        ...errors,
        emailError:
          value.length === 0
            ? "This field is required"
            : !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)
            ? "Not valid email"
            : null,
      });
    } else if (field === "phone") {
      setErrors({
        ...errors,
        phoneError:
          value.length === 0
            ? "This field is required"
            : !/^(012|010|011)[0-9]{8}$/.test(value)
            ? "Not valid phone"
            : null,
      });
    } else if (field === "password") {
      setErrors({
        ...errors,
        passwordError:
          value.length === 0
            ? "This field is required"
            : !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
                value
              )
            ? "Not valid password"
            : null,
      });
    } else if (field === "confirm_password") {
      setErrors({
        ...errors,
        confirmPasswordError:
          value.length === 0
            ? "This field is required"
            : value !== userData.password
            ? "No matching"
            : null,
      });
    }
  };

  const handleChange = (e) => {
    setUserData({
      ...userData,
      [e.target.id]: e.target.value,
    });

    handleValidation(e.target.id, e.target.value);
  };

  //const navigate = useNavigate();

  const dispatch = useDispatch();

  function checkProperties(obj) {
    for (var key in obj) {
      if (obj[key] !== null && obj[key] !== "") return false;
    }
    return true;
  }
  useEffect(() => {
    setValid(checkProperties(errors));
  }, [errors]);

  const registeer = () => {
    if (valid) {
      dispatch(register({ ...userData }));
      console.log({ ...userData });

      // navigate(`/${userData.name}/products`);
    } else {
      console.log(valid);
    }
  };

  return (
    <>
      <div>
        <div className="mb-3 text-center">
          <a href="/">
            <img src={logoMain} alt="logo-main" style={{ width: "103px" }} />
          </a>
        </div>
        <div className="mb-3">
          <form>
            <h2 className="mb-3 text-center">Create account</h2>
            <label for="name">Your Name</label>
            <input
              type="text"
              id="name"
              placeholder="First and last name"
              value={userData.name}
              onChange={(e) => handleChange(e)}
            />
            <div className="text-danger mb-2">{errors.nameError}</div>
            {/* /////////////////////////////////////////////// */}
            <label for="email">Email</label>
            <input
              type="text"
              id="email"
              placeholder=""
              value={userData.email}
              onChange={(e) => handleChange(e)}
            />
            <div className="text-danger mb-2">{errors.emailError}</div>
            <label for="phone">phone</label>
            <input
              type="text"
              id="phone"
              placeholder=""
              value={userData.phone}
              onChange={(e) => handleChange(e)}
            />
            <div className="text-danger mb-2">{errors.phoneError}</div>
            {/* ////////////////////////////////////////////////////////// */}
            <label for="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder=""
              value={userData.password}
              onChange={(e) => handleChange(e)}
            />
            <div className="text-danger mb-2">{errors.passwordError}</div>
            <label for="confirm_password">Confirm password</label>
            <input
              type="password"
              id="confirm_password"
              placeholder=""
              value={userData.confirm_password}
              onChange={(e) => handleChange(e)}
            />
            <div className="text-danger mb-2">
              {errors.confirmPasswordError}
            </div>

            <input
              className="btn btn-warning"
              type="button"
              value="Register"
              onClick={registeer}
            />
            <p>
              <span>Already have an account? </span>
              <Link to="/login" className="text-info">
                Sign-in
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
}
