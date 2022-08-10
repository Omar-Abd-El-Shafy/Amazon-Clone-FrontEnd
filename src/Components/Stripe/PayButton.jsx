import { Button } from 'bootstrap';
import React from 'react';
const PayButton = ({ cart }) => {
  const handelClick = () => {
    console.log(cart);
  };
  return
  <Button
    // onClick={() => handelClick()}
    // disabled={cart.cartItems.length === 0}
    variant="warning"
  >
    Check Out
  </Button>;
};

export default PayButton;
