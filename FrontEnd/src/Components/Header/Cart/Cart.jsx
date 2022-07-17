import React, { Component } from "react";
import { Link } from "react-router-dom";

class Cart extends Component {
    render() {
        return (
            <>
                <Link to="/CartPage" style={{ cursor: "pointer" }}>
                    <i className="fa-brands fa-opencart fs-1 header-cart text-white">
                        <span className="cart-count ms-sm-1 me-3 font-monospace">
                            0
                        </span>
                    </i>
                </Link>
            </>
        );
    }
}

export default Cart;
