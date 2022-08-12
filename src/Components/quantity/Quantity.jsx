import React, { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
const Quantity = ({ product }) => {
  const [Qty, setQty] = useState(1);
  const quantity = (e) => {
    setQty(e.target.value);
  };
  console.log('product');
  console.log(product.rating.count);
  return (
    <Row>
      <Col className="select">
        <label>QTY</label>
        {/* <Form.Select style={{width:'fit-content', padding:"0 .5rem"}} value={Qty} onChange={quantity} size="lg">
          {[...Array(product.rating.count).keys()].map((x) => (
            <option key={x + 1} value={x + 1}></option>
          ))}
        </Form.Select> */}
      </Col>
    </Row>
  );
};

export default Quantity;
