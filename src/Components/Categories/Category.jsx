import React from "react";
import { useGetAllCategoriesQuery } from "../../Redux/Api.js";
import CategoryItem from "./CategoryItem.jsx";
import Loading from "../Loading/Loading";
import { Row } from "react-bootstrap";

const Categorier = () => {
    const { data: category, isLoading } = useGetAllCategoriesQuery();

    return (
        <>
            {isLoading ? (
                <div>
                    <Loading />
                </div>
            ) : (
                <>
                    <Row
                        className="mt-4"
                        style={{ marginRight: "0", marginLeft: " 0" }}
                    >
                        {category.map((item) => (
                            <CategoryItem key={item._id} item={item} />
                        ))}
                    </Row>
                </>
            )}
        </>
    );
};

export default Categorier;
