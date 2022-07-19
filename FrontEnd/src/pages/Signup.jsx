import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { register } from "../store/actions/register";
import logoMain from "../assets/imgs/logo/Amazon-logo-main.png";

export default function Registration() {
    const [userData, setUserData] = useState({
        name: "",
        emailorphone: "",
        password: "",
        confirmPassword: "",
    });

    const [errors, setErrors] = useState({
        nameError: "",
        emailorphoneError: "",
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
        } else if (field === "emailorphone") {
            setErrors({
                ...errors,
                emailorphoneError:
                    value.length === 0
                        ? "This field is required"
                        : !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
                              value
                          ) && !/^(012|010|011)[0-9]{8}$/.test(value)
                        ? "Not valid email or phone"
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
        } else if (field === "confirmPassword") {
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

    const navigate = useNavigate();

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
            const formData = new FormData();

            formData.append("name", userData.name);
            formData.append(
                "email",
                userData.emailorphone.includes("@")
                    ? userData.emailorphone
                    : null
            );
            formData.append(
                "phone",
                !userData.emailorphone.includes("@")
                    ? userData.emailorphone
                    : null
            );
            formData.append("password", userData.password);

            formData.append("role", "regular");

            dispatch(register(formData));

            navigate(`/${userData.name}/products`);
        } else {
            console.log(valid);
        }
    };

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
                    <label for="emailorphone">Email or phone</label>
                    <input
                        type="text"
                        id="emailorphone"
                        placeholder=""
                        value={userData.emailorphone}
                        onChange={(e) => handleChange(e)}
                    />
                    <div className="text-danger mb-2">
                        {errors.emailorphoneError}
                    </div>
                    <label for="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        placeholder="Password"
                        value={userData.password}
                        onChange={(e) => handleChange(e)}
                    />
                    <div className="text-danger mb-2">
                        {errors.passwordError}
                    </div>
                    <label for="confirmPassword">Confirm password</label>
                    <input
                        type="password"
                        id="confirmPassword"
                        placeholder="Confirm password"
                        value={userData.confirmPassword}
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
    );
}
