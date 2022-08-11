import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { RiShoppingCartLine } from "react-icons/ri";

export default function Cart() {
    const cart = useSelector((state) => state.cart);
    const { cartItems } = cart;
    return (
        <>
            <Link to="/CartPage" style={{ cursor: "pointer" }}>
                <div className="cart">
                    <span className="cart-count ms-sm-1 mt-1 me-3 font-monospace">
                        {cartItems.length}
                    </span>
                    <RiShoppingCartLine className="fa-solid fs-3 me-4 text-white cart-img" />
                </div>
            </Link>
        </>
    );
}
