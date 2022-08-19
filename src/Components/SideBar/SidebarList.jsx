import Nav from "react-bootstrap/Nav";
import Accordion from "react-bootstrap/Accordion";

import { useGetdAlldepartmentQuery } from "../../Redux/Api";
import SidebarMenu from "./SidebarMenu";
import Loading from "../Loading/Loading";
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
                        <Accordion key={item._id}>
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>
                                    {item.name}
                                </Accordion.Header>
                                <SidebarMenu item={item} />
                            </Accordion.Item>
                        </Accordion>
                    ))}
                </Nav>
            )}
        </>
    );
}

export default SidebarList;
