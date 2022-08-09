import React from "react";
import { FiLogIn } from "react-icons/fi";
import { Link } from "react-router-dom";

export default function LogInButton() {
    return (
        <>
            <Link to="/login">
                <div className="LogInButton">
                    {/* <FiLogIn size={20} color="#FFF" /> */}
                    <span style={{ fontSize: 18 }}> Login</span>
                </div>
            </Link>
        </>
    );
}
