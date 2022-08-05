import React from 'react';
import { useState } from 'react';
import { Col, Container, Dropdown, Row } from 'react-bootstrap';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Products from '../Components/Products/Products';
import { useLocation } from 'react-router-dom';

const CategoryPage = (item) => {
  const location = useLocation();
  const cat = location.pathname.split('/')[3];
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
          <h1>{cat}</h1>
        </Row>
        <Col className=" d-flex justify-content-between  filter">
          {/* <Button variant="transparent">Sort by</Button> */}
          <Dropdown as={ButtonGroup}>
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
                width: '100%',
              }}
              name="sort"
              onChange={(e) => setSort(e.target.value)}
            >
              <Dropdown.Item value="Featured" as="option">
                Featured
              </Dropdown.Item>
              <Dropdown.Item value="ase" as="option">
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

          <Dropdown as={ButtonGroup}>
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
                width: '100%',
              }}
              name="Department"
              onChange={handelFilters}
            >
              {/* <Button variant="transparent">Sort by</Button> */}

              <Dropdown.Item as="option">Department </Dropdown.Item>
              <Dropdown.Item as="option">Department</Dropdown.Item>
              <Dropdown.Item as="option">Department</Dropdown.Item>
            </Dropdown.Toggle>
          </Dropdown>
        </Col>
      </Container>
      <Products cat={cat} filter={filter} sort={sort} />
    </Container>
  );
};

export default CategoryPage;
