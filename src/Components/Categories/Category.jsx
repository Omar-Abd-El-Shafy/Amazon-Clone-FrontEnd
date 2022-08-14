import React from 'react';
import { useGetAllCategoriesQuery } from '../../Redux/Api.js';
import CategoryItem from './CategoryItem.jsx';
import Error from '../Error/Error';
import Loading from '../Loading/Loading';
import { Row } from 'react-bootstrap';

const Categorier = () => {
  const {
    data: category,
    isLoading: loading,
    isFetching,
  } = useGetAllCategoriesQuery();
if (loading) {
  return (
    <div>
      <Loading />
    </div>
  );
}

if (!category?.data) {
  return <div>No products</div>;
}
  return (
    <>
      
        <Row className="mt-4" style={{ marginRight: '0', marginLeft: ' 0' }}>
          {category.map((item) => (
            <CategoryItem key={item._id} item={item} />
          ))}
        </Row>
   
    </>
  );
};

export default Categorier;
