import React from "react";
import { Link } from "react-router-dom";

export default function LogInButton() {
    return (
        <>
            <Link to="/login">
                <div className="LogInButton">
                    <span style={{ fontSize: 18 }}> Login</span>
                </div>
            </Link>
        </>
    );
}
