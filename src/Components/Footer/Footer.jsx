import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/amazon_logo.png";
import { RiHeart2Fill } from "react-icons/ri";
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
                            <a
                                href="mailto: abc@amazon.com"
                                className="text-white"
                            >
                                Contact Us
                            </a>
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
                Made with{" "}
                <RiHeart2Fill style={{ color: "red", fontSize: "1.5rem" }} /> by
                Black organization Team ©2022
            </div>
        </div>
    );
};

export default Footer;
