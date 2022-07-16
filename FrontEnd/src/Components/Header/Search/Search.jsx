import React from "react";

function Search() {
    return (
        <div className="header-search">
            <div className="input-group">
                <input
                    type="text"
                    className="form-control"
                    placeholder=""
                    aria-label=""
                    aria-describedby="button-addon2"
                />
                <button
                    className="btn searchIcon"
                    type="button"
                    id="button-addon2"
                >
                    <i className="fa-solid fa-magnifying-glass "></i>
                </button>
            </div>
        </div>
    );
}

export default Search;
