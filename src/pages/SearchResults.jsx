import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { Link } from 'react-router-dom';
import Rating from '../Components/Rating/Rating';
import ProductsItem from '../Components/Products/ProductsItem';

export default function SearchResults() {
  let param = useParams();
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [sortBy, setSortBy] = useState('');
  useEffect(() => {
    axios
      .get(
        `https://amazon-clone-deploy.herokuapp.com/product/search?name=${param.search}&sortBy=${sortBy}`
      )
      .then((res) => {
        setProducts(res.data.products);
        setError(null);
      })
      .catch((err) => {
        setError(`No products found for ${param.search}`);
      });
  }, [param.search, sortBy]);
  const handleSelect = (e) => {
    setSortBy(e);
  };
  return (
    <>
      <h3>
        {products.length} Results for
        <span className="paramSearch"> {param.search}</span>
      </h3>
      <div className="SearchCategory">
        <DropdownButton
          as={ButtonGroup}
          key="warning"
          id="dropdown-variants-warning"
          variant="warning"
          title="Sort By"
          onSelect={handleSelect}
        >
          <Dropdown.Item eventKey="Price%3A%20Low%20to%20High">
            Price: Low to High
          </Dropdown.Item>
          <Dropdown.Item eventKey="Price%3A%20High%20to%20Low">
            Price: High to Low
          </Dropdown.Item>
          <Dropdown.Item eventKey="Avg.%20Customer%20review">
            Avg. Customer review
          </Dropdown.Item>
        </DropdownButton>
      </div>
      <Row >
        {products && !error ? (
          products.map((product) => {
            return <ProductsItem product={product} />;
          })
        ) : (
          <h1 className="w-50 m-auto">{error}</h1>
        )}
        
      </Row>
    </>
  );
}
