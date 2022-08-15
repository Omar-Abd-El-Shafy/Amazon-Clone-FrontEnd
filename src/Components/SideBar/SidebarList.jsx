import { Row } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import {
  useGetAllCategoriesQuery,
  useGetdAlldepartmentQuery,
} from '../../Redux/Api';
import SidebarMenu from './SidebarMenu';
import Loading from '../Loading/Loading';
function SidebarList() {
  const { data: department, isLoading } = useGetdAlldepartmentQuery();

  return (
    <>
      {isLoading ? (
        <div>
          <Loading />
        </div>
      ) : (
        <Nav defaultActiveKey="/home" className="flex-column">
          <h5>Shop By department</h5>

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
        </Nav>
      )}
    </>
  );
}

export default SidebarList;
