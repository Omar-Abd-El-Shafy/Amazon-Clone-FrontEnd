import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { RiShoppingCartLine } from "react-icons/ri";
import { useGetUserCartQuery } from "../../../Redux/Api";

export default function Cart() {
    // const cart = useSelector((state) => state.cart);
    // const { cartItems } = cart;
    const loggedInUser = useSelector((state) => state.user?.loggedInUser);
    const { data: cartData } = useGetUserCartQuery(loggedInUser?.token, {
        skip: loggedInUser ? false : true,
    });
    // let length;
    // if (cartData?.products) {
    //     length = cartData.products.length;
    // } else {
    //     length = 0;
    // }
    return (
        <>
            <Link
                to={loggedInUser ? "/CartPage" : "/login"}
                style={{ cursor: "pointer" }}
            >
                <div className="cart">
                    <span className="cart-count ms-sm-1 mt-1 me-3 font-monospace">
                        {/* {length} */}
                        {cartData?.products.length}
                    </span>
                    <RiShoppingCartLine className="fa-solid fs-3 me-4 text-white cart-img" />
                </div>
            </Link>
        </>
    );
}
