import React, { useState } from "react";
import "../../index.css";
import Loading from "../Loading/Loading";
import Error from "../Error/Error";
import { Row } from "react-bootstrap";
import { useGetAllProdactsQuery } from "../../Redux/Api";
import ProductsItem from "./ProductsItem";
import Pages from "../Pagination/Pages";
import { wait } from "@testing-library/user-event/dist/utils";
import { useEffect } from "react";

function ProHome({ cat }) {
    const [page, setPage] = useState(1);
    const { data, isLoading } = useGetAllProdactsQuery();

    // console.log(cat);
    // console.log('products');
    // console.log(data);
    // console.log(data);

    return (
        <>
            {isLoading ? (
                <div>
                    <Loading />
                </div>
            ) : (
                <>
                    <h1>Products</h1>
                    <div className="products">
                        <Row>
                            {cat
                                ? cat.slice(0, 8).map((product) => (
                                      <>
                                          <ProductsItem
                                              key={product._id}
                                              product={product}
                                          />
                                      </>
                                  ))
                                : data.products
                                      .slice(0, 8)
                                      .map((product) => (
                                          <ProductsItem
                                              key={product._id}
                                              product={product}
                                          />
                                      ))}
                        </Row>
                    </div>
                </>
            )}
        </>
    );
}

export default ProHome;
