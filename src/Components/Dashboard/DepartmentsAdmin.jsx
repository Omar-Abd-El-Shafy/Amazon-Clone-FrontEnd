import React from "react";
import AddDepartment from "./AddDepartment/AddDepartment";
import Departments from "../../pages/Departments";
export default function DepartmentsAdmin() {
    return (
        <div>
            <div className="mb-2 d-flex justify-content-around">
                <AddDepartment />
            </div>
            <Departments />
        </div>
    );
}
