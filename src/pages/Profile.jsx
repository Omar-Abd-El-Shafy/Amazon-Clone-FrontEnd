import React from "react";
import { Link } from "react-router-dom";
import EditProfileForm from "../Components/EditProfileForm/EditProfileForm";

export default function Profile() {
    return (
        <>
            <Link to="/profile">
                <EditProfileForm />
            </Link>
        </>
    );
}
