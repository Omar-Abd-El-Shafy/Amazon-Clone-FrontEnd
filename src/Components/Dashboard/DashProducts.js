import React from "react";
import AddProduct from "./AddProductsButton/AddProductsButton";
import AddCategory from "./AddCategory/AddCategoryForm";
export default function DashProducts() {
  return (
    <>
      <div className="row ms-auto" style={{ width: "150px" }}>
        <AddProduct />
      </div>

      <div className="row ms-auto" style={{ width: "150px" }}>
        <AddCategory />
      </div>
    </>
  );
}
