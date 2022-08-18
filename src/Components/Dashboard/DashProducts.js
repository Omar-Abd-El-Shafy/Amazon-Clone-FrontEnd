import React from "react";
import AddProduct from "./AddProductsButton/AddProductsButton";
import AddCategory from "./AddCategory/AddCategoryForm";
import DeleteCategory from "./DeleteCategory/DeleteCategoryForm";
import UpdateCategory from "./UpdateCategory/UpdateCategoryForm";
export default function DashProducts() {
  return (
    <>
      <div className="row ms-auto" style={{ width: "150px" }}>
        <AddProduct />
      </div>

      <div className="row ms-auto" style={{ width: "150px" }}>
        <AddCategory />
      </div>

      <div className="row ms-auto" style={{ width: "150px" }}>
        <UpdateCategory />
      </div>

      <div className="row ms-auto" style={{ width: "150px" }}>
        <DeleteCategory />
      </div>
    </>
  );
}
