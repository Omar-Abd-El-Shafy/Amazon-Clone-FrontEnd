import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// import Rating from '../Products/Rating';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { CardGroup, Carousel } from 'react-bootstrap';
import axios from 'axios';

// import Card from 'react-bootstrap/Card';

import { popular, Inspired, Home } from '../../data';

const Product = () => {
  const [catgProdact, setcatgProdact] = useState([]);
  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/category/`)
      .then((res) => console.log(res.data))
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      <h1>Product</h1>
    </>
  );
};

export default Product;
