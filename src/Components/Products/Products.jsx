import React from 'react';
import '../../index.css';
import Loading from '../Loading/Loading';
import Error from '../Error/Error';
import { Helmet } from 'react-helmet-async';
import { Row } from 'react-bootstrap';


import { useGetAllProdactsQuery } from '../../Redux/prodactsApi';
import ProductsItem from './ProductsItem';
function ProHome() {
  const {
    data: products,
    error,
    isLoading: loading,
  } = useGetAllProdactsQuery();

 
  return (
    <>
      <Helmet>
        <title>Amazon</title>
      </Helmet>
      <h1>Feather Products</h1>
      <div className="products">
        {loading ? (
          <Loading />
        ) : error ? (
          <Error variant="danger">{error}</Error>
        ) : (
          <Row>
            {products.map((product) => (
              <ProductsItem key={product.id} product={product} />
            ))}
          </Row>
        )}
      </div>
    </>
  );
}

export default ProHome;
