import React from 'react';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useParams } from 'react-router-dom';
import { useGetCategorydepartmentQuery } from '../../Redux/prodactsApi';

const SidebarMenu = ({item}) => {

  const id  = item._id;
  const { data: category, isError,
    error,
    isLoading: loading, } = useGetCategorydepartmentQuery(id);
  console.log(category);
  return (
    <>
      {loading ? (
        <div>category...</div>
      ) : isError ? (
        { error }
      ) : (
        <NavDropdown id="nav-dropdown-dark-example" menuVariant="light">
          {category.map((cat) => (
            <NavDropdown.Item href={`product/search/category/${cat._id}`}>
              {cat.name}
            </NavDropdown.Item>
          ))}
        </NavDropdown>
      )}
    </>
  );
};

export default SidebarMenu;


