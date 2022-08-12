import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { GoSearch } from "react-icons/go";
import { Form, FormControl, InputGroup } from "react-bootstrap";
import axios from "axios";

function Search() {
    const [query, setQuery] = useState("");
    const [data, setData] = useState([]);
    useEffect(() => {
        // console.log(query);
        const searchProducts = async () => {
            const res = await axios.get(
                `https://amazon-clone-deploy.herokuapp.com/product/search?name=${query}`
            );
            setData(res.data);
            console.log(res.data);
        };
        if (query.length === 0 || query.length > 1) searchProducts();
    }, [query]);

    const navigate = useNavigate();
    const handelSubmet = (e) => {
        e.preventDefault();
    };
    return (
        <Form className="header-search" onSubmit={handelSubmet}>
            <InputGroup className="input-group">
                <FormControl
                    className="form-control"
                    onChange={(e) => setQuery(e.target.value)}
                    type="text"
                    name="search"
                    id="search"
                    placeholder="Search Prodaucts"
                    aria-label="Search Prodaucts"
                    aria-describedby="button-search"
                />
                <button
                    className="btn searchIcon "
                    type="submit"
                    id="button-search"
                >
                    <GoSearch className="fw-bolder fs-5" />
                </button>
            </InputGroup>
        </Form>
    );
}

export default Search;
