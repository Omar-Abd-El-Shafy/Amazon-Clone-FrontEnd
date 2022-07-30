import React from "react";
import AddProduct from "./AddProductsButton/AddProductsButton";

export default function DashProducts() {
    return (
        <>
            <div className="row ms-auto" style={{ width: "150px" }}>
                <AddProduct />
            </div>
        </>
    );
}
