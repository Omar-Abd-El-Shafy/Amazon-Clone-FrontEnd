import React from "react";
import { Button, Form, InputGroup } from "react-bootstrap";

export default function EditProfileForm() {
    // props.funcNav(false);
    return (
        <>
            <InputGroup className="mb-3 w-50 m-auto">
                <Form.Control
                    placeholder="user name"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                />
                <Button variant="dark" id="button-addon2">
                    Edit
                </Button>
            </InputGroup>
            <InputGroup className="mb-3 w-50 m-auto">
                <Form.Control
                    placeholder="email"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                />
                <Button variant="dark" id="button-addon2">
                    Edit
                </Button>
            </InputGroup>
            <InputGroup className="mb-3 w-50 m-auto">
                <Form.Control
                    placeholder="password"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                />
                <Button variant="dark" id="button-addon2">
                    Edit
                </Button>
            </InputGroup>
        </>
    );
}
