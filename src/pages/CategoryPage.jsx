import React from "react";
import { useGetProdactCategoriesQuery } from "../Redux/Api";
import { useParams } from "react-router-dom";
import Products from "../Components/Products/Products";
import Loading from "../Components/Loading/Loading";

const CategoryPage = () => {
    const param = useParams();
    const { id } = param;
    // const [page, setPage] = useState(1);
    const { data, isLoading } = useGetProdactCategoriesQuery(id);

    return (
        <>
            {isLoading ? (
                <div>
                    <Loading />
                </div>
            ) : (
                <>
                    <Products cat={data.products} pagination={false} />
                </>
            )}
        </>
    );
};

export default CategoryPage;
