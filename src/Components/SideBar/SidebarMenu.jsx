import React from "react";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useGetCategorydepartmentQuery } from "../../Redux/Api";
import Accordion from "react-bootstrap/Accordion";

const SidebarMenu = ({ item }) => {
    const id = item._id;
    const {
        data: category,
        isError,
        error,
        isLoading: loading,
    } = useGetCategorydepartmentQuery(id);
    // console.log(category);
    return (
        <>
            {loading ? (
                <div>category...</div>
            ) : isError ? (
                { error }
            ) : (
                <>
                    {category.map((cat) => (
                        <Accordion.Body>
                            <Link to={`product/category/${cat._id}`}>
                                {cat.name}
                            </Link>
                        </Accordion.Body>
                    ))}
                </>
            )}
        </>
    );
};

export default SidebarMenu;
