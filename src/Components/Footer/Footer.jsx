import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/amazon_logo.png";

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-content">
                <div className="footer-logo">
                    <Link to="/">
                        <img src={logo} alt="logo" style={{ width: 100 }} />
                    </Link>
                </div>
                <div className="footer-links">
                    <ul>
                        <li>
                            <Link to="/" className="text-white">
                                Contact Us
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="footer-links">
                    <ul>
                        <li>
                            <Link to="/about" className="text-white">
                                About
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="text-white pb-3 text-center">
                © 1996-2022, Amazon.com, Inc. or its affiliates
            </div>
        </div>
    );
};

export default Footer;
