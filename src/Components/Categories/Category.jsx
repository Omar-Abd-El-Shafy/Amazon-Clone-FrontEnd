import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import axios from 'axios';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Categorie } from '../../data';
import { useGetAllCategoriesQuery } from '../../Redux/prodactsApi.js';
import { useSelector } from 'react-redux';
import CategoryItem from './CategoryItem.jsx';

const Categorier = () => {
  // console.log(Categorie);
  // const Category = useSelector((state) => state.Category);

  // const {
  //   data: Category,
  //   error,
  //   isLoading: loading,
  // } = useGetAllCategoriesQuery();
  // console.log(Category);
  // const [catg, setcatg] = useState([]);
  // useEffect(() => {
  //   axios
  //     .get('https://fakestoreapi.com/products/categories')
  //     .then((res) => setcatg(res.data))
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);
  return (
    <>
      <Row className="mt-4" style={{ marginRight: '0', marginLeft: ' 0' }}>
        {Categorie.map((item) => (
          <CategoryItem key={item.Id} item={item} />
        ))}
      </Row>
    </>
  );
};

export default Categorier;
