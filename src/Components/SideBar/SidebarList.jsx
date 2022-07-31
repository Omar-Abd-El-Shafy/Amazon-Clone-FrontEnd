import Nav from "react-bootstrap/Nav";
import { IoIosArrowForward } from "react-icons/io";
function SidebarList() {
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
        </Nav>
    );
}

export default SidebarList;
