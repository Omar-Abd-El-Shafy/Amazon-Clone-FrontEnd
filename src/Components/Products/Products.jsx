import React from "react";
import "../../index.css";
import Loading from "../Loading/Loading";
import { Row } from "react-bootstrap";
import { useGetAllProdactsQuery } from "../../Redux/Api";
import ProductsItem from "./ProductsItem";
import Pagination from "react-bootstrap/Pagination";

const ProHome = ({ cat, pagination }) => {
    const [page, setPage] = React.useState(1);
    const { data, isLoading } = useGetAllProdactsQuery(page);
    const handelNextPage = () => {
        if (page < data.pages) {
            setPage(page + 1);
        }
        window.scrollTo({
            top: 1700,
            behavior: "smooth",
        });
    };
    const handelPrevPage = () => {
        if (page > 1) {
            setPage(page - 1);
        }
        window.scrollTo({
            top: 1700,
            behavior: "smooth",
        });
    };
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
                    {pagination ? (
                        <div className=" d-flex justify-content-center mt-4 ">
                            <Pagination>
                                <Pagination.Prev
                                    onClick={() => handelPrevPage()}
                                >
                                    Prev.
                                </Pagination.Prev>
                                <Pagination.Item className="pageNum">
                                    <span className="pageNum">{page}</span>
                                </Pagination.Item>
                                <Pagination.Next
                                    onClick={() => handelNextPage()}
                                >
                                    Next
                                </Pagination.Next>
                            </Pagination>
                        </div>
                    ) : null}
                </>
            )}
        </>
    );
};

export default ProHome;
