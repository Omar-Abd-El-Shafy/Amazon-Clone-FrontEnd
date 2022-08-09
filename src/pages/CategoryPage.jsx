import React from 'react';
import { useGetProdactCategoriesQuery } from '../Redux/prodactsApi';
// import { productFetch } from '../Redux/ProductSlice'
import { useState } from 'react';
// import { useLocation } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Products from '../Components/Products/Products';
import { Button } from 'bootstrap';
import { Col, Container, Dropdown, Row } from 'react-bootstrap';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
const CategoryPage = ( item ) =>
{
  const param = useParams()
  const {id} = param
  const dispatch = useDispatch()
  const {
    data: cat,
    error,
    isLoading: loading, } = useGetProdactCategoriesQuery(id)
  // console.log(cat)
  // const location = useLocation();
  // const cat = location.pathname.split('/')[3];
  const [filter, setFilter] = useState({});
  const [sort, setSort] = useState({});
  const handelFilters = (e) => {
    const value = e.target.value;

    setFilter({ 
      ...filter,
      [e.target.name]: value,
    });
  };

  return (
    <Container>
      <Container>
        <Row>
          <h1>{id}</h1>
        </Row>
        <Col className=" d-flex justify-content-between  filter">
          {/* <Button variant="transparent">Sort by</Button> */}
          <Dropdown as={ButtonGroup} className="align-items-center">
            <span className="mx-2 fw-bold">Sort by :</span>
            <Dropdown.Toggle
              split
              // variant="transparent"
              // id="dropdown btn-group"
              as="select"
              style={{
                outline: 'none',
                padding: '.150rem .150rem',
                cursor: 'pointer',
                backgroundColer: 'transparent',
                border: '2px solid #dee2e6',
                borderRadius: '.4rem',
                color: '#212529',
              }}
              name="sort"
              onChange={(e) => setSort(e.target.value)}
            >
              <Dropdown.Item value="newest" as="option">
                newest
              </Dropdown.Item>
              <Dropdown.Item value="asc" as="option">
                Price: Low to High
              </Dropdown.Item>
              <Dropdown.Item value="desc" as="option">
                Price: High to Low
              </Dropdown.Item>
              <Dropdown.Item value="Review" as="option">
                Avg. Customer Review
              </Dropdown.Item>
            </Dropdown.Toggle>
          </Dropdown>

          <Dropdown as={ButtonGroup} className="align-item-center">
            <span className="mx-2 fw-bold">filters :</span>
            <Dropdown.Toggle
              split
              // variant="transparent"
              // id="dropdown btn-group"
              as="select"
              style={{
                outline: 'none',
                padding: '.150rem .150rem',
                cursor: 'pointer',
                backgroundColer: 'transparent',
                border: '2px solid #dee2e6',
                borderRadius: '.4rem',
                color: '#212529',
              }}
              name="Filters"
              onChange={handelFilters}
            >
              <Dropdown.Item as="option">Rating</Dropdown.Item>
              <Dropdown.Item as="option">Rating</Dropdown.Item>
              <Dropdown.Item as="option">Rating</Dropdown.Item>
            </Dropdown.Toggle>
          </Dropdown>
        </Col>
      </Container>
      <Products cat={cat} filters={filter} sort={sort} />
    </Container>
  );
};

export default CategoryPage;
