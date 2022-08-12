import { Row } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import { IoIosArrowForward } from 'react-icons/io';
import { useGetAllCategoriesQuery, useGetdAlldepartmentQuery } from '../../Redux/prodactsApi';
import { SingledepartmentUrl, ProdactCategoriesUrl } from '../../Redux/URL';
function SidebarList() {
  const {
    data: department,
    isError,
    error,
    isLoading: loading,
  } = useGetdAlldepartmentQuery();

  const { data: category } = useGetAllCategoriesQuery();


  return (
    <Nav defaultActiveKey="/home" className="flex-column">
      <h5>Shop By department</h5>
      {loading ? (
        <div>department ....</div>
      ) : error ? (
        { error }
      ) : (
        <Row className="mt-4" style={{ marginRight: '0', marginLeft: ' 0' }}>
          {department.map((item) => (
            <Nav.Link
              key={item._id}
              href={`${SingledepartmentUrl}${item._id}`}
              className="sidebar-navs d-flex justify-content-between"
            >
              {item.name}
              <IoIosArrowForward />
            </Nav.Link>
          ))}
        </Row>
      )}
      <h5>Shop By Category</h5>
      {loading ? (
        <div>Category ....</div>
      ) : isError ? (
        { error }
      ) : (
        <Row className="mt-4" style={{ marginRight: '0', marginLeft: ' 0' }}>
          {category.map((item) => (
            <Nav.Link
              key={item._id}
              href={`${ProdactCategoriesUrl}${item._id}`}
              className="sidebar-navs d-flex justify-content-between"
            >
              {item.name}
              <IoIosArrowForward />
            </Nav.Link>
          ))}
        </Row>
      )}
    </Nav>
  );
}

export default SidebarList;
