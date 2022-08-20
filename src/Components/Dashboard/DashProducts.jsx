import React from "react";
import AddProduct from "./AddProductsButton/AddProductsButton";
import AddCategory from "./AddCategory/AddCategoryForm";
import DeleteCategory from "./DeleteCategory/DeleteCategoryForm";
import productDevelopmentImg from "../../assets/imgs/Product-Development-01-01-1200x840-1-1.png";
import UpdateCategory from "./UpdateCategory/UpdateCategoryForm";
import Products from "../Products/Products";
import { useEffect } from "react";
export default function DashProducts() {
    return (
        <>
            <div className=" ">
                <div className="mb-2">
                    <AddProduct />
                </div>
                {/* <div className="mb-2">
          <AddCategory />
        </div>
        <div className="mb-2">
          <UpdateCategory />
        </div>
        <div>
          <DeleteCategory />
        </div> */}
                <Products />
            </div>
            {/* <img
        src={productDevelopmentImg}
        alt="product-development"
        className="dashProducts"
      /> */}
        </>
    );
}
