import React, { useEffect, useState } from "react";
import { useGetAllCategoriesQuery } from "../../Redux/prodactsApi.js";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import CategoryItem from "./CategoryItem.jsx";
import Error from "../Error/Error";
import Loading from "../Loading/Loading";
import Card from "react-bootstrap/Card";
import { Row } from "react-bootstrap";
import { Helmet } from "react-helmet-async";

const Categorier = () => {
    // console.log(Categorie);
    // const Category = useSelector((state) => state.Category);
    //  const params = useParams();
    //  const { _id } = params;
    //  console.log(params);
    const {
        data: category,
        isError: error,
        isLoading: loading,
    } = useGetAllCategoriesQuery();
    // console.log(category )

    // const [ catg, setcatg ] = useState( [] );
    // useEffect(() => {
    //   axios
    //     .get(`https://fakestoreapi.com/products/categories`)
    //     .then((res) =>  setcatg(res.data))
    //     .catch((err) => {
    //       console.log(err);
    //     });
    // }, []);
    return (
        <>
            {loading ? (
                <Loading />
            ) : error ? (
                <Error variant="danger">{error}</Error>
            ) : (
                <Row
                    className="mt-4"
                    style={{ marginRight: "0", marginLeft: " 0" }}
                >
                    {category.map((item) => (
                        <CategoryItem key={item._id} item={item} />
                    ))}
                </Row>
            )}
        </>
    );
};

export default Categorier;
