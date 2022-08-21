import React from "react";
import AddProduct from "./AddProductsButton/AddProductsButton";
import Products from "../Products/Products";
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
                <Products pagination={true} />
            </div>
            {/* <img
        src={productDevelopmentImg}
        alt="product-development"
        className="dashProducts"
      /> */}
        </>
    );
}
