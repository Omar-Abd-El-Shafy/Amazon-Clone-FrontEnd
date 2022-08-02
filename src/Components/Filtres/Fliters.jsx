import { Col, Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';

function Fliters() {
  return (
    <Container>
      <Row>
        <h1>Title</h1>
      </Row>
      <Col className=" d-flex justify-content-between">
        <Dropdown as={ButtonGroup} className={'border border-2 rounded-3 '}>
          <Button variant="transparent">Sort by</Button>
          <Dropdown.Toggle
            split
            variant="transparent"
            id="dropdown-split-basic"
          />

          <Dropdown.Menu>
            <Dropdown.Item>Featured</Dropdown.Item>
            <Dropdown.Item>Price: Low to High</Dropdown.Item>
            <Dropdown.Item>Price: High to Low</Dropdown.Item>
            <Dropdown.Item>Avg. Customer Review</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        <Dropdown as={ButtonGroup} className={'border border-2 rounded-3 '}>
          <Button variant="transparent">Department</Button>

          <Dropdown.Toggle
            split
            variant="transparent"
            id="dropdown-split-basic"
          />

          <Dropdown.Menu>
            <Dropdown.Item>Department</Dropdown.Item>
            <Dropdown.Item>Department</Dropdown.Item>
            <Dropdown.Item>Department</Dropdown.Item>
            <Dropdown.Item>Department</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Col>
    </Container>
  );
}

export default Fliters;
