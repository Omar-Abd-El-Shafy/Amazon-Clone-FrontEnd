import React from "react";
import AddDepartment from "./AddDepartment/AddDepartment";
import Departments from "../../pages/Departments";
import UpdateDepartment from "./UpdateDepartment/UpdateDepartment";
import DeleteDepartment from "./DeleteDepartment/DeleteDepartment";
export default function DepartmentsAdmin() {
    return (
        <div>
            <div className="mb-2 d-flex justify-content-around">
                <AddDepartment />
                <UpdateDepartment />
                <DeleteDepartment />
            </div>
            <Departments />
        </div>
    );
}
