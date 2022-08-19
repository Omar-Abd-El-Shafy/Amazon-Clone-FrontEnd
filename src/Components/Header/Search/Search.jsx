import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { GoSearch } from "react-icons/go";
import { Form, FormControl, InputGroup } from "react-bootstrap";

function Search() {
    const [query, setQuery] = useState("");
    const navigate = useNavigate();

    const handelSubmit = (e) => {
        e.preventDefault();
        let path = "/searchResults";
        navigate(path + "/" + query);
    };
    return (
        <Form  onSubmit={handelSubmit}>
            <InputGroup className="input-group">
                <FormControl
                    className="form-control"
                    onChange={(e) => setQuery(e.target.value)}
                    type="text"
                    name="search"
                    id="search"
                    placeholder="Search Products"
                    aria-label="Search Products"
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
