import { useEffect, useState, Fragment } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const PasswordReset = () => {
    const navigate = useNavigate();
    const [valid, setValid] = useState(false);

    function checkProperties(obj) {
        for (var key in obj) {
            if (obj[key] !== null && obj[key] !== "") return false;
        }
        return true;
    }

    const [validUrl, setValidUrl] = useState(false);
    const [msg, setMsg] = useState("");
    const [error, setError] = useState("");
    const [userData, setUserData] = useState({
        password: "",
        confirm_password: "",
    });
    const [errors, setErrors] = useState({
        passwordError: "",
        confirmPasswordError: "",
    });

    useEffect(() => {
        setValid(checkProperties(errors));
    }, [errors]);

    const handleValidation = (field, value) => {
        if (field === "password") {
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

    const param = useParams();
    const url = `https://amazon-clone-deploy.herokuapp.com/user/password-reset/${param.id}/${param.token}`;

    useEffect(() => {
        const verifyUrl = async () => {
            try {
                await axios.get(
                    url,

                    {
                        headers: {
                            "x-access-token": param.token,
                        },
                    }
                );
                setValidUrl(true);
            } catch (error) {
                console.log(error);
                setValidUrl(false);
            }
        };
        verifyUrl();
    }, [param, url]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (valid) {
            e.preventDefault();
            try {
                const { data } = await axios.post(
                    url,
                    {
                        password: userData.password,
                        confirm_password: userData.confirm_password,
                    },
                    {
                        headers: {
                            "x-access-token": param.token,
                        },
                    }
                );
                setMsg(data.message);
                setError("");
                navigate(`/login`);
            } catch (error) {
                if (
                    error.response &&
                    error.response.status >= 400 &&
                    error.response.status <= 500
                ) {
                    setError(error.response.data.message);
                    setMsg("");
                }
            }
        }
    };

    return (
        <Fragment>
            {validUrl ? (
                <div>
                    <form onSubmit={handleSubmit}>
                        <h1>Add New Password</h1>
                        <input
                            type="password"
                            placeholder="Password"
                            name="password"
                            id="password"
                            onChange={handleChange}
                            value={userData.password}
                            required
                        />
                        <div className="text-danger mb-2">
                            {errors.passwordError}
                        </div>

                        <input
                            type="password"
                            placeholder="confirmPassword"
                            name="confirmPassword"
                            id="confirm_password"
                            onChange={handleChange}
                            value={userData.confirm_password}
                            required
                        />
                        <div className="text-danger mb-2">
                            {errors.confirmPasswordError}
                        </div>

                        {error && <div>{error}</div>}
                        {msg && <div>{msg}</div>}
                        <button type="submit">Submit</button>
                    </form>
                </div>
            ) : (
                <h1>404 Not Found</h1>
            )}
        </Fragment>
    );
};

export default PasswordReset;
