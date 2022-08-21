import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import {
    useDeleteDepartmentMutation,
    useGetdAlldepartmentQuery,
} from "../../../Redux/Api";

export default function DeleteDepartment() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const loggedInUser = useSelector((state) => state.user.loggedInUser);
    const { data: departments } = useGetdAlldepartmentQuery();
    const [DeleteDepartment] = useDeleteDepartmentMutation();
    const schema = yup.object().shape({
        departments: yup.string().required("Required Field"),
    });

    return (
        <>
            <Button variant="warning" onClick={handleShow} className="crudBtn">
                Delete department
            </Button>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
                dialogClassName="myModal"
            >
                <Modal.Header closeButton>
                    <Modal.Title>Delete department</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Formik
                        enableReinitialize
                        initialValues={{
                            departments: "",
                        }}
                        validationSchema={schema}
                        onSubmit={(values) => {
                            // console.log(values);
                            DeleteDepartment({
                                token: loggedInUser.token,
                                id: values.departments,
                            })
                                .unwrap()
                                .then((fulfilled) => {
                                    toast.success(
                                        `Department deleted Successfully`,
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
                                    handleClose();
                                })
                                .catch((rejected) =>
                                    console.error(rejected.data)
                                );
                        }}
                    >
                        {({ setFieldValue }) => (
                            <Form id="btnId">
                                <div className="form-control">
                                    <label htmlFor="departments">
                                        department
                                    </label>
                                    <Field
                                        name="departments"
                                        //value={item}
                                        as="select"
                                        // onChange={(e) => {
                                        //     setItem(e.target.value);
                                        // }}
                                    >
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
                                    </Field>
                                    <div className="ErrorMessageTxt">
                                        <ErrorMessage name="departments" />
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
