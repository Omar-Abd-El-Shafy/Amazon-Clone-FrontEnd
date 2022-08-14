import React from 'react';
import { useGetProdactCategoriesQuery } from '../Redux/prodactsApi';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import Products from '../Components/Products/Products';
import { Col, Container, Dropdown, Row } from 'react-bootstrap';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Loading from '../Components/Loading/Loading';
import { Helmet } from 'react-helmet-async';
import Error from '../Components/Error/Error';
import { date } from 'yup/lib/locale';
const CategoryPage = (item) => {
  const param = useParams();
  const { id } = param;

  // console.log(id)
  const [page, setPage] = useState(1);

  const {
    isLoading: loading,
    isFetching,
    data,
  } = useGetProdactCategoriesQuery(id, page);
  const cat = data.products;
  console.log(cat);
  if (loading) {
    return <div>Loading</div>;
  }

  if (!cat?.data) {
    return <div>No products</div>;
  }

  // console.log(cat.products);

  // const [filter, setFilter] = useState({});
  // const [sort, setSort] = useState({});
  const handelFilters = (e) => {
    const value = e.target.value;
    // setFilter({
    //   ...filter,
    //   [e.target.name]: value,
    // });
  };

  return (
    <>
      <Container>
        <Container>
          {/* <Row>
              <Helmet>
                <title>{cat.products.name}</title>
              </Helmet>

              <h1>{cat.products.name}</h1>
            </Row> */}
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
                // onChange={(e) => setSort(e.target.value)}
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
        <Products cat={cat} />
      </Container>

      <button onClick={() => setPage(page - 1)} loading={isFetching}>
        Previous
      </button>
      <button onClick={() => setPage(page + 1)} loading={isFetching}>
        Next
      </button>
    </>
  );
};

export default CategoryPage;
