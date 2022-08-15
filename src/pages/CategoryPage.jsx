import React from 'react';
import { useGetProdactCategoriesQuery } from '../Redux/Api';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import Products from '../Components/Products/Products';
import { Col, Container, Dropdown, Row } from 'react-bootstrap';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Loading from '../Components/Loading/Loading';
import { Helmet } from 'react-helmet-async';
import Error from '../Components/Error/Error';
import { date } from 'yup/lib/locale';
const CategoryPage = () => {
  const param = useParams();
  const { id } = param;

  // console.log(id)
  const [page, setPage] = useState(1);

  const { data,isLoading } = useGetProdactCategoriesQuery(id);
  ;

  // enas sello is a talented web developer 👌😎
  return (
    <>
      {isLoading ? (
        <div>
          <Loading />
        </div>
      ) : (
        <>
          <Container>
            <Container>
             
              <Products cat={data.products} />

            </Container>
          </Container>
        </>
      )}
    </>
  );
};

export default CategoryPage;

              // <Col className=" d-flex justify-content-between  filter">
              //   {/* <Button variant="transparent">Sort by</Button> */}
              //   <Dropdown as={ButtonGroup} className="align-items-center">
              //     <span className="mx-2 fw-bold">Sort by :</span>
              //     <Dropdown.Toggle
              //       split
              //       // variant="transparent"
              //       // id="dropdown btn-group"
              //       as="select"
              //       style={{
              //         outline: 'none',
              //         padding: '.150rem .150rem',
              //         cursor: 'pointer',
              //         backgroundColer: 'transparent',
              //         border: '2px solid #dee2e6',
              //         borderRadius: '.4rem',
              //         color: '#212529',
              //       }}
              //       name="sort"
              //       // onChange={(e) => setSort(e.target.value)}
              //     >
              //       <Dropdown.Item value="newest" as="option">
              //         newest
              //       </Dropdown.Item>
              //       <Dropdown.Item value="asc" as="option">
              //         Price: Low to High
              //       </Dropdown.Item>
              //       <Dropdown.Item value="desc" as="option">
              //         Price: High to Low
              //       </Dropdown.Item>
              //       <Dropdown.Item value="Review" as="option">
              //         Avg. Customer Review
              //       </Dropdown.Item>
              //     </Dropdown.Toggle>
              //   </Dropdown>

              //   <Dropdown as={ButtonGroup} className="align-item-center">
              //     <span className="mx-2 fw-bold">filters :</span>
              //     <Dropdown.Toggle
              //       split
              //       // variant="transparent"
              //       // id="dropdown btn-group"
              //       as="select"
              //       style={{
              //         outline: 'none',
              //         padding: '.150rem .150rem',
              //         cursor: 'pointer',
              //         backgroundColer: 'transparent',
              //         border: '2px solid #dee2e6',
              //         borderRadius: '.4rem',
              //         color: '#212529',
              //       }}
              //       name="Filters"
              //       onChange={handelFilters}
              //     >
              //       <Dropdown.Item as="option">Rating</Dropdown.Item>
              //       <Dropdown.Item as="option">Rating</Dropdown.Item>
              //       <Dropdown.Item as="option">Rating</Dropdown.Item>
              //     </Dropdown.Toggle>
              //   </Dropdown>
              // </Col>;
              