import { Row } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import {
  useGetAllCategoriesQuery,
  useGetdAlldepartmentQuery,
} from '../../Redux/prodactsApi';
import SidebarMenu from './SidebarMenu';
function SidebarList() {
  const {
    data: department,
    isError,
    error,
    isLoading: loading,
  } = useGetdAlldepartmentQuery();
  return (
    <Nav defaultActiveKey="/home" className="flex-column">
      <h5>Shop By department</h5>
      {loading ? (
        <div>department ....</div>
      ) : error ? (
        { error }
      ) : (
        <>
          {department.map((item) => (
            <Navbar bg="light">
              <Container fluid>
                <Navbar.Brand key={item._id}>{item.name}</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbar-dark-example" />
                <Navbar.Collapse id="navbar-dark-example">
                  <Nav>
                    <SidebarMenu item={item} />
                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>
          ))}
          {/* 
          
            
              {
                
                  
                  <NavDropdown.Item href="#action/3.2">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Something
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Separated link
                  </NavDropdown.Item>
                
              }
           
           */}
        </>
      )}

      {/* <h5>Shop By department</h5>
      {loading ? (
        <div>department ....</div>
      ) : error ? (
        { error }
      ) : (
        <Row className="mt-4" style={{ marginRight: '0', marginLeft: ' 0' }}>
          {department.map((item) => (
            <Nav.Link
              href={`department/${item._id}`}
              className="sidebar-navs d-flex justify-content-between"
            >
              {item.name}
              <IoIosArrowForward />
            </Nav.Link>
          ))}
        </Row>
      )} */}
    </Nav>
  );
}

export default SidebarList;
