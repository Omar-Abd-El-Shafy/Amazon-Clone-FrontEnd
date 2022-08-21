import React from "react";
import Categorier from "../Categories/Category";
import AddCategory from "./AddCategory/AddCategoryForm";
import AddCategoryImage from "./AddImageCategory/AddCategoryImage";
import DeleteCategory from "./DeleteCategory/DeleteCategoryForm";
import UpdateCategory from "./UpdateCategory/UpdateCategoryForm";

export default function Categories() {
    return (
        <>
            <div className="mb-2 d-flex justify-content-around">
                <AddCategoryImage />
                <AddCategory />
                <UpdateCategory />
                <DeleteCategory />
            </div>
            <Categorier />
        </>
    );
}
