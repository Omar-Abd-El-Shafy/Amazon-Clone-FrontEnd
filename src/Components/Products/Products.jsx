import React from "react";
import "../../index.css";
import Loading from "../Loading/Loading";
import { Row } from "react-bootstrap";
import { useGetAllProdactsQuery } from "../../Redux/Api";
import ProductsItem from "./ProductsItem";

function ProHome({ cat }) {
    const { data, isLoading } = useGetAllProdactsQuery();

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
