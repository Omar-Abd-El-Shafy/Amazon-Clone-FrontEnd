import axios from "axios";
import { useState, useEffect, useCallback } from "react";

const ForgotPassword = () => {
    const [valid, setValid] = useState(false);
    const [email, setEmail] = useState("");
    const [msg, setMsg] = useState("");
    const [error, setError] = useState("");
    let [emailError, setEmailError] = useState(null);

    const checkProperties = useCallback(() => {
        if (emailError !== null) return false;

        return true;
    }, [emailError]);

    useEffect(() => {
        setValid(checkProperties());
    }, [emailError, checkProperties]);

    const handleValidation = (field, value) => {
        if (field === "email") {
            setEmailError(
                (emailError =
                    value.length === 0
                        ? "This field is required"
                        : !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
                              value
                          )
                        ? "Not valid email"
                        : null)
            );
        }
    };

    const handleChange = (e) => {
        setEmail(e.target.value);

        handleValidation(e.target.id, e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (valid) {
            try {
                const url = `https://amazon-clone-deploy.herokuapp.com/user/forgotPassword`;
                const { data } = await axios.post(url, { email });
                setMsg(data.message);
                setError("");
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
        <div className="d-flex justify-content-center">
            <form onSubmit={handleSubmit} className="border border-3 p-5">
                <h3 className="mt-3">Please enter your email</h3>
                <input
                    type="email"
                    placeholder="Email"
                    name="email"
                    id="email"
                    onChange={handleChange}
                    value={email}
                    required
                    className="mt-2 rounded-1 p-2 w-100"
                />
                {error && <div>{error}</div>}
                {msg && <div>{msg}</div>}
                <div className="text-danger mb-2">{emailError}</div>
                <button type="submit" className="btn btn-info mt-2 mx-auto">
                    Submit
                </button>
            </form>
        </div>
    );
};

export default ForgotPassword;
