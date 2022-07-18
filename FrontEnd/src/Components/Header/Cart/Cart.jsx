import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Cart() {
    const quantity = useSelector((state) => state.cart.quantity);

    return (
        <>
            <Link to="/CartPage" style={{ cursor: "pointer" }}>
                <i className="fa-brands fa-opencart fs-1 header-cart text-white">
                    <span className="cart-count ms-sm-1 me-3 font-monospace">
                        {quantity}
                    </span>
                </i>
            </Link>
        </>
    );
}
