import React from 'react';
import { useGetAllCategoriesQuery } from '../../Redux/prodactsApi.js';
import CategoryItem from './CategoryItem.jsx';
import Error from '../Error/Error';
import Loading from '../Loading/Loading';
import { Row } from 'react-bootstrap';
import { Helmet } from 'react-helmet-async';

const Categorier = () => {
  const {
    data: category,
    isError: error,
    isLoading: loading,
  } = useGetAllCategoriesQuery();

  return (
    <>
      {loading ? (
        <Loading />
      ) : error ? (
        <Error variant="danger">{error}</Error>
      ) : (
        <Row className="mt-4" style={{ marginRight: '0', marginLeft: ' 0' }}>
          {category.map((item) => (
            <CategoryItem key={item._id} item={item} />
          ))}
        </Row>
      )}
    </>
  );
};

export default Categorier;
