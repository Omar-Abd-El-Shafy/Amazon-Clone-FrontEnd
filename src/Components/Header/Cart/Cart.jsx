import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Cart() {
    const {totalcartQuantitye} = useSelector(
      (state) => state.cart
    );
    return (
      <>
        <Link to="/CartPage" style={{ cursor: 'pointer' }}>
          <i className="fa-solid fa-solid fa-basket-shopping fs-2 header-cart text-white">
            <span className="cart-count ms-sm-1 me-3 font-monospace">
              {totalcartQuantitye}
            </span>
          </i>
        </Link>
      </>
    );
}
