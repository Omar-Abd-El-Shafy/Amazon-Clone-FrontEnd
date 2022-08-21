import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import {
    useGetAllCategoriesQuery,
    useAddCategoryImageMutation,
} from "../../../Redux/Api";

export default function AddCategoryImage() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [file, setFile] = useState();

    const loggedInUser = useSelector((state) => state.user.loggedInUser);
    const { data: categories } = useGetAllCategoriesQuery();
    // const { data: departments } = useGetdAlldepartmentQuery();
    const [AddCategoryImage] = useAddCategoryImageMutation();

    const schema = yup.object().shape({
        category: yup.string().required("Required Field"),
        // department: yup.string().required("Required Field"),
        //name: yup.string().required("Required Field"),
        img: yup.string().required("Required Field"),
    });
    return (
        <>
            <Button variant="warning" onClick={handleShow} className="crudBtn">
                Add category image
            </Button>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
                dialogClassName="myModal"
            >
                <Modal.Header closeButton>
                    <Modal.Title>Update Category</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Formik
                        enableReinitialize
                        initialValues={{
                            category: "",
                            img: "",
                        }}
                        validationSchema={schema}
                        onSubmit={(values) => {
                            //console.log(values);
                            const formData = new FormData();

                            formData.append("img", file[0]);
                            // console.log(file);
                            // console.log(values);
                            // console.log(JSON.stringify(formData));
                            AddCategoryImage({
                                token: loggedInUser?.token,
                                id: values.category,
                                body: formData,
                            })
                                .then(() => {
                                    toast.success(
                                        `Category updated Successfully`,
                                        {
                                            position: "bottom-left",
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
                                .unwrap()
                                .catch((rejected) =>
                                    console.error(rejected.data)
                                );
                        }}
                    >
                        {({ setFieldValue }) => (
                            <Form id="btnId">
                                {/* category */}
                                <div className="form-control">
                                    <label htmlFor="category">category</label>
                                    <Field
                                        name="category"
                                        as="select"
                                        onChange={(e) => {
                                            setFieldValue(
                                                "category",
                                                e.target.value
                                            );
                                            // const cat = categories.find(
                                            //   (item) => item._id === e.target.value
                                            // );
                                            // setFieldValue("department", cat?.department._id);
                                            // setFieldValue("name", cat?.name);
                                        }}
                                    >
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
                                {/* images */}
                                <div className="form-control">
                                    <label htmlFor="img">image</label>
                                    <Field
                                        name="img"
                                        type="file"
                                        accept="image/png, image/jpeg"
                                        onChange={(e) => {
                                            setFieldValue(
                                                "img",
                                                e.target.value
                                            );
                                            setFile(e.target.files);
                                        }}
                                    />
                                    <div className="ErrorMessageTxt">
                                        <ErrorMessage name="img" />
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
