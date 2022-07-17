import React, { Component } from "react";
import CartPage from "../../../pages/Cart/CartPage";
class Cart extends Component {
    render() {
        return (
            <>
                <a href={CartPage} className="btn">
                    <i className="fa-brands fa-opencart fs-1 header-cart text-white">
                        <span className="cart-count ms-sm-1 me-3 font-monospace">
                            0
                        </span>
                    </i>
                </a>
            </>
        );
    }
}

export default Cart;
