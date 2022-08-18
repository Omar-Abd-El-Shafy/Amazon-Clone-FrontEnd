import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import axios from "axios";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import {
    useAddCategoryMutation,
    useGetdAlldepartmentQuery,
} from "../../../Redux/Api";

export default function AddCategory() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const loggedInUser = useSelector((state) => state.user.loggedInUser);
    const { data: departments } = useGetdAlldepartmentQuery();
    const [addCategory, { isError }] = useAddCategoryMutation();

    // useEffect(() => {
    //   console.log("item", item);
    // }, [item]);

    const schema = yup.object().shape({
        department: yup.string().required("Required Field"),
        name: yup.string().required("Required Field"),
    });

    return (
        <>
            <Button variant="warning" onClick={handleShow} className="crudBtn">
                Create Category
            </Button>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Add New Category</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Formik
                        enableReinitialize
                        initialValues={{
                            department: "",
                            name: "",
                        }}
                        validationSchema={schema}
                        onSubmit={(values) => {
                            addCategory({
                                token: loggedInUser.token,
                                body: {
                                    department: values.department,
                                    name: values.name,
                                },
                            })
                                .unwrap()
                                .then((fulfilled) => {
                                    toast.success(
                                        `Category Added Successfully`,
                                        {
                                            position: "bottom-center",
                                            autoClose: 3000,
                                            hideProgressBar: false,
                                            closeOnClick: true,
                                            pauseOnHover: true,
                                            draggable: true,
                                            progress: undefined,
                                        }
                                    );
                                })
                                .catch((rejected) =>
                                    console.error(rejected.data)
                                );

                            // console.log(values);
                            // axios.post(
                            //   "https://amazon-clone-deploy.herokuapp.com/category/",
                            //   {
                            //     department: values.department,
                            //     name: values.name,
                            //   },
                            //   {
                            //     headers: {
                            //       "x-access-token": loggedInUser.token,
                            //     },
                            //   }
                            // );
                        }}
                    >
                        {({ setFieldValue }) => (
                            <Form id="btnId">
                                {/* department */}
                                <div className="form-control">
                                    <label htmlFor="department">
                                        department
                                    </label>
                                    <Field name="department" as="select">
                                        <option value="" disabled>
                                            Select an option
                                        </option>
                                        {departments?.map((dept) => (
                                            <option
                                                key={dept._id}
                                                value={dept._id}
                                            >
                                                {dept.name}
                                            </option>
                                        ))}
                                        {/* <option value="62e46ccdd282c036e6947f18">
                      Electronics
                    </option>
                    <option value="62e46cf6d282c036e6947f1b">Computers</option>
                    <option value="62e46d0ad282c036e6947f1e">Smart Home</option>
                    <option value="62e46d29d282c036e6947f21">
                      Arts & Crafts
                    </option>
                    <option value="62e46d35d282c036e6947f24">Books</option>
                    <option value="62f94e6e339d76c5360ee133">
                      Men's Fashion
                    </option> */}
                                    </Field>
                                    <div className="ErrorMessageTxt">
                                        <ErrorMessage name="department" />
                                    </div>
                                </div>
                                {/* categoryname */}
                                <div className="form-control">
                                    <label htmlFor="name">Category name</label>
                                    <Field name="name" type="text" />
                                    <div className="ErrorMessageTxt">
                                        <ErrorMessage name="name" />
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
