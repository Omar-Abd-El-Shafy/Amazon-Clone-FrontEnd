import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import {
    useDeleteCategoryMutation,
    useGetAllCategoriesQuery,
} from "../../../Redux/Api";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

export default function DeleteCategory() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const token = useSelector((state) => state.user.loggedInUser?.token);
    const { data: categories } = useGetAllCategoriesQuery();
    const [deleteCategory, { isError }] = useDeleteCategoryMutation();

    const schema = yup.object().shape({
        category: yup.string().required("Required Field"),
    });

    return (
        <>
            <Button variant="danger" onClick={handleShow} className="crudBtn">
                Delete Category
            </Button>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
                dialogClassName="myModal"
            >
                <Modal.Header closeButton>
                    <Modal.Title>Delete Category</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Formik
                        enableReinitialize
                        initialValues={{
                            category: "",
                        }}
                        validationSchema={schema}
                        onSubmit={(values) => {
                            deleteCategory({ token, id: values.category });
                            if (!isError) {
                                toast.success(`Category Deleted Successfully`, {
                                    position: "bottom-center",
                                    autoClose: 3000,
                                    hideProgressBar: false,
                                    closeOnClick: true,
                                    pauseOnHover: true,
                                    draggable: true,
                                    progress: undefined,
                                });
                                handleClose();
                            }
                        }}
                    >
                        {({ setFieldValue }) => (
                            <Form id="btnId">
                                {/* category */}
                                <div className="form-control">
                                    <label htmlFor="category">category</label>
                                    <Field name="category" as="select">
                                        <option value="" disabled>
                                            Please select an option
                                        </option>
                                        {categories?.map((cate) => (
                                            <option
                                                key={cate._id}
                                                value={cate._id}
                                            >
                                                {cate.name}
                                            </option>
                                        ))}
                                    </Field>
                                    <div className="ErrorMessageTxt">
                                        <ErrorMessage name="category" />
                                    </div>
                                </div>
                            </Form>
                        )}
                    </Formik>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="warning" type="submit" form="btnId">
                        Submit
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
