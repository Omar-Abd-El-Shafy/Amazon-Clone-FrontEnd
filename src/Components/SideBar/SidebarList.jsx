import { Row } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import { IoIosArrowForward } from 'react-icons/io';
import { useGetAllCategoriesQuery } from '../../Redux/prodactsApi';
function SidebarList() {
  const {
    data: category,
    isError: error,
    isLoading: loading,
  } = useGetAllCategoriesQuery();
  return (
    <Nav defaultActiveKey="/home" className="flex-column">
      <h5>Shop By Department</h5>
      <Nav.Link
        href="/"
        className="sidebar-navs d-flex justify-content-between"
      >
        Active
        <IoIosArrowForward />
      </Nav.Link>
      <Nav.Link
        href="/"
        eventKey="link-1"
        className="sidebar-navs d-flex justify-content-between"
      >
        Link
        <IoIosArrowForward />
      </Nav.Link>
      <Nav.Link
        eventKey="link-2"
        className="sidebar-navs d-flex justify-content-between"
      >
        Link
        <IoIosArrowForward />
      </Nav.Link>
      <div>
        <hr />
      </div>
      <h5>Shop By Category</h5>
      {loading ? (
        <div>Category ....</div>
      ) : error ? (
        { error }
      ) : (
        <Row className="mt-4" style={{ marginRight: '0', marginLeft: ' 0' }}>
          {category.map((item) => (
            <Nav.Link
              href={`/products/category/${item._id}`}
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
