import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import {
    useUpdateDepartmentMutation,
    useGetdAlldepartmentQuery,
} from "../../../Redux/Api";

export default function UpdateDepartment() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const loggedInUser = useSelector((state) => state.user.loggedInUser);
    const { data: departments } = useGetdAlldepartmentQuery();
    const [UpdateDepartment] = useUpdateDepartmentMutation();
    const schema = yup.object().shape({
        departments: yup.string().required("Required Field"),
        name: yup.string().required("Required Field"),
    });

    return (
        <>
            <Button variant="warning" onClick={handleShow} className="crudBtn">
                Update department
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
                            name: "",
                        }}
                        validationSchema={schema}
                        onSubmit={(values) => {
                            // console.log(values);
                            UpdateDepartment({
                                token: loggedInUser.token,
                                body: {
                                    id: values.departments,
                                    name: values.name,
                                },
                            })
                                .unwrap()
                                .then((fulfilled) => {
                                    toast.success(
                                        `Department updated Successfully`,
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

                                {/* name */}
                                <div className="form-control">
                                    <label htmlFor="name">
                                        New department name
                                    </label>
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
