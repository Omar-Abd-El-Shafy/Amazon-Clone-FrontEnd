import React from "react";
import AddDepartment from "./AddDepartment/AddDepartment";
import Departments from "../../pages/Departments";
import DeleteDepartment from "./DeleteDepartment/DeleteDepartment";
import UpdateDepartment from "./UpdateDepartment/UpdateDepartment";
export default function DepartmentsAdmin() {
  return (
    <div>
      <div className="mb-2 d-flex justify-content-around">
        <AddDepartment />
        <DeleteDepartment />
        <UpdateDepartment />
      </div>
      <Departments />
    </div>
  );
}
