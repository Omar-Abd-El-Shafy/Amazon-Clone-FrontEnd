import React from "react";
import { useGetdAlldepartmentQuery } from "../Redux/Api";
import Loading from "../Components/Loading/Loading";
import { Row } from "react-bootstrap";
import DepartmentItem from "../Components/Dashboard/DepartmentItem";

const Departments = () => {
    const { data: department, isLoading } = useGetdAlldepartmentQuery();
    return (
        <>
            {isLoading ? (
                <div>
                    <Loading />
                </div>
            ) : (
                <>
                    <Row
                        className="mt-4"
                        style={{ marginRight: "0", marginLeft: " 0" }}
                    >
                        {department.map((item) => (
                            <DepartmentItem key={item._id} item={item} />
                        ))}
                    </Row>
                </>
            )}
        </>
    );
};

export default Departments;
