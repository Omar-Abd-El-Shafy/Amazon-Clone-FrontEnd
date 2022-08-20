import React from "react";
import AddProduct from "./AddProductsButton/AddProductsButton";
import Products from "../Products/Products";
export default function DashProducts(props) {
    console.log(props);
    return (
        <>
            <div className=" ">
                <div className="mb-2">
                    <AddProduct />
                </div>
                <Products pagination={true} />
            </div>
        </>
    );
}
