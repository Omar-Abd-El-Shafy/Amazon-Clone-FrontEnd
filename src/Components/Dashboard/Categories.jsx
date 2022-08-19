import React from "react";
import Categorier from "../Categories/Category";
import AddCategory from "./AddCategory/AddCategoryForm";
import DeleteCategory from "./DeleteCategory/DeleteCategoryForm";
import UpdateCategory from "./UpdateCategory/UpdateCategoryForm";

export default function Categories() {
    return (
        <>
            <div className="mb-2 d-flex justify-content-around">
                <AddCategory />
                <UpdateCategory />
                <DeleteCategory />
            </div>
            <div className="mb-2"></div>
            <div className="mb-2"></div>
            <Categorier />
        </>
    );
}
