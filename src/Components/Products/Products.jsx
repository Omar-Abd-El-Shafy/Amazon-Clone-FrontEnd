import React, { useState } from 'react';
import '../../index.css';
import Loading from '../Loading/Loading';
import Error from '../Error/Error';
import { Row } from 'react-bootstrap';
import { useGetAllProdactsQuery } from '../../Redux/Api';
import ProductsItem from './ProductsItem';
import Pages from '../Pagination/Pages';

function ProHome({ cat }) {
  console.log( cat )
  const [page, setPage] = useState(1);
  const { data, isLoading: loading, isFetching } = useGetAllProdactsQuery(page);
  const products = data.products;
  console.log('products');
  if (loading) {
    return (
      <div>
        <Loading />
      </div>
    );
  }

  if (!data?.data) {
    return <div>No products</div>;
  }


  // const products = data.products;
  // console.log(data);
  //  console.log(products);
  // console.log(products.products);
  //   const [filterdPro, setFilters] = useState([]);
  //   useEffect(() => {
  //     cat &&
  //       setFilters(
  //         products.filter((item) =>
  //           object
  //             .entries(filters)
  //             .every(([key, value]) => item[key].includes(value))
  //         )
  //       );
  //   }, [products, filters, cat]);
  // console.log(filterdPro);
  // // const [sorted, setSort] = useState([]);
  // useEffect(() => {
  //   if (sort === 'newest') {
  //     setFilters((prev) => {
  //       [...prev].sort((a, b) => a.createdAt - b.createdAt);
  //     });
  //   } else if (sort === 'Review') {
  //     setFilters((prev) => {
  //       [...prev].sort((a, b) => b.price - a.price);
  //     });
  //   } else if (sort === 'asc') {
  //     setFilters((prev) => {
  //       [...prev].sort((a, b) => a.price - b.price);
  //     });
  //   } else {
  //     setFilters((prev) => {
  //       [...prev].sort((a, b) => b.price - a.price);
  //     });
  //   }
  // }, [sort]);

  return (
    <>
      <h1>Products</h1>
      <div className="products">
        <Row>
          {cat
            ? cat.slice(0, 8).map((product) => (
                <>
                  <ProductsItem key={product._id} product={product} />
                </>
              ))
            : products
                .slice(0, 8)
                .map((product) => (
                  <ProductsItem key={product._id} product={product} />
                ))}
        </Row>

        {/* <Pages />
        <button onClick={() => setPage(page - 1)} loading={isFetching}>
          Previous
        </button>
        <button onClick={() => setPage(page + 1)} loading={isFetching}>
          Next
        </button> */}
      </div>
    </>
  );
}

export default ProHome;
