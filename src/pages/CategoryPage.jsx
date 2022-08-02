import React from 'react';
import { Container } from 'react-bootstrap';
import Fliters from '../Components/Filtres/Fliters';
import Products from '../Components/Products/Products';

const CategoryPage = ( item ) =>
{
  console.log(item)
  return (
    <Container>
      
      <Fliters />
      <Products />
    </Container>
  );
};

export default CategoryPage;
