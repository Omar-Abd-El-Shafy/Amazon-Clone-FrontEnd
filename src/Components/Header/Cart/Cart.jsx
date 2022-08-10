import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { FiShoppingCart } from 'react-icons/fi';

export default function Cart() {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  return (
    <>
      <Link to="/CartPage" style={{ cursor: 'pointer' }}>
        <div className="cart">
          <FiShoppingCart className="fa-solid fs-3 text-white" />
          <span className="cart-count ms-sm-1 mt-1 me-3 font-monospace">
            {cartItems.length}
          </span>
        </div>
      </Link>
    </>
  );
}
