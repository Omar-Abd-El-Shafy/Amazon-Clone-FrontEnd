import React from 'react';
import { Container } from 'react-bootstrap';
import Fliters from '../Components/Filtres/Fliters';
import ProHome from './ProHome';

const CategoryPage = ( item ) =>
{
  console.log(item)
  return (
    <Container>
      <Fliters />
      <ProHome />
    </Container>
  );
};

export default CategoryPage;
