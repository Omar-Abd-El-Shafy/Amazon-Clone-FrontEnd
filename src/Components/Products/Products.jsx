import React from 'react';
import '../../index.css';
import Loading from '../Loading/Loading';
import Error from '../Error/Error';
import { Row } from 'react-bootstrap';

import { useGetAllProdactsQuery } from '../../Redux/prodactsApi';
import ProductsItem from './ProductsItem';
import { useSelector } from 'react-redux';
function ProHome({ cat, sort, filter }) {
  // console.log(cat ,sort, filter );
  const {
    data: products,
    error,
    isLoading: loading,
  } = useGetAllProdactsQuery();
  console.log(products);
  return (
    <>
      <h1>Feather Products</h1>
      <div className="products">
        {loading ? (
          <Loading />
        ) : error ? (
          <Error variant="danger">{error}</Error>
        ) : (
          <Row>
            {products.slice(0, 8).map((product) => (
              <ProductsItem key={product._id} product={product} />
            ))}
          </Row>
        )}
      </div>
    </>
  );
}

export default ProHome;
