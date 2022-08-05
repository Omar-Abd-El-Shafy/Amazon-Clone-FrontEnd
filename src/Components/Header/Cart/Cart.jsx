import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Cart() {
    const cart = useSelector((state) => state.cart);
    const { cartItems } = cart;
    // const total = cartItems.reduce((a, b) => a + b.price * b.quantity, 0);
    return (
        <>
            <Link to="/CartPage" style={{ cursor: "pointer" }}>
                <i className="fa-solid fa-solid fa-basket-shopping fs-2 header-cart text-white">
                    <span className="cart-count ms-sm-1 me-3 font-monospace">
                        {cartItems.length}
                    </span>
                </i>
            </Link>
        </>
    );
}
