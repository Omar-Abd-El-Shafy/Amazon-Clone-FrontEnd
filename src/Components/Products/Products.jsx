import React, { useEffect } from 'react';
import '../../index.css';
import Loading from '../Loading/Loading';
import Error from '../Error/Error';
import { Row } from 'react-bootstrap';

import {
  useGetAllProdactsQuery,
  useGetProdactCategoriesQuery,
} from '../../Redux/prodactsApi';
import ProductsItem from './ProductsItem';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { object } from 'yup';
function ProHome({ cat, sort, filters }) {
  console.log(cat);
  const {

    data: products,
    error,
    isLoading: loading,
  } = useGetAllProdactsQuery();

console.log(products);
  //   const [filterdPro, setFilters] = useState([]);
  //   useEffect(() => {
  //     cat &&
  //       setFilters(
  //         products.filter((item) =>
  //           object
  //             .entries(filters)
  //             .every(([key, value]) => item[key].includes(value))
  //         )
  //       );
  //   }, [products, filters, cat]);
  // console.log(filterdPro);
  // // const [sorted, setSort] = useState([]);
  // useEffect(() => {
  //   if (sort === 'newest') {
  //     setFilters((prev) => {
  //       [...prev].sort((a, b) => a.createdAt - b.createdAt);
  //     });
  //   } else if (sort === 'Review') {
  //     setFilters((prev) => {
  //       [...prev].sort((a, b) => b.price - a.price);
  //     });
  //   } else if (sort === 'asc') {
  //     setFilters((prev) => {
  //       [...prev].sort((a, b) => a.price - b.price);
  //     });
  //   } else {
  //     setFilters((prev) => {
  //       [...prev].sort((a, b) => b.price - a.price);
  //     });
  //   }
  // }, [sort]);

  return (
    <>
      <h1>Feather Products</h1>
      <div className="products">
        {loading ? (
          <Loading />
        ) : error ? (
          <Error error={error} variant="danger"/>
        ) : (
          <Row>
            {cat
              ? cat.map((product) => (
                  <>
                    <ProductsItem key={product._id} product={product} />
                  </>
                ))
              : products
                  .slice(0, 8)
                  .map((product) => (
                    <ProductsItem key={product._id} product={product} />
                  ))}
          </Row>
        )}
      </div>
    </>
  );
}

export default ProHome;
