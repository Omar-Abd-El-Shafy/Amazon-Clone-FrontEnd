import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import {
    useAddProductMutation,
    useGetCategorydepartmentQuery,
    useGetdAlldepartmentQuery,
} from "../../../Redux/Api";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

export default function AddProduct() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [item, setItem] = useState("");
    const [files, setFiles] = useState({});

    const token = useSelector((state) => state.user.loggedInUser?.token);
    const { data: departments } = useGetdAlldepartmentQuery();
    const { data: categories } = useGetCategorydepartmentQuery(item, {
        skip: item ? false : true,
    });
    const [addProduct] = useAddProductMutation();

    const schema = yup.object().shape({
        department: yup.string().required("Required Field"),
        category: yup.string().required("Required Field"),
        productName: yup.string().required("Required Field"),
        description: yup.string().required("Required Field"),
        price: yup.number().required("Required Field"),
        stock: yup.number().required("Required Field"),
        images: yup.string().required("Required Field"),
        cod: yup.boolean().required("Required Field"),
        brand: yup.string().required("Required Field"),
        weigth: yup.number().required("Required Field"),
    });

    return (
        <>
            <Button variant="warning" onClick={handleShow} className="crudBtn">
                Create Product
            </Button>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
                dialogClassName="myModal"
            >
                <Modal.Header closeButton>
                    <Modal.Title>Add New Product</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Formik
                        enableReinitialize
                        initialValues={{
                            department: item,
                            category: "",
                            productName: "",
                            description: "",
                            price: "",
                            stock: "",
                            images: "",
                            cod: "",
                            brand: "",
                            weigth: "",
                        }}
                        validationSchema={schema}
                        onSubmit={(values) => {
                            const formData = new FormData();

                            for (let i = 0; i < files.length; i++) {
                                formData.append("img", files[i]);
                            }
                            if (!files) return;

                            formData.append("brand", values.brand);
                            formData.append("category", values.category);
                            formData.append("cod", values.cod);
                            formData.append("department", values.department);
                            formData.append("description", values.description);
                            formData.append("price", values.price);
                            formData.append("name", values.productName);
                            formData.append("stock", values.stock);
                            formData.append("weight", values.weigth);

                            addProduct({ token, body: formData })
                                .unwrap()
                                .then((fulfilled) => {
                                    toast.success(
                                        `Product Added Successfully`,
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
                                .catch((rejected) =>
                                    console.error(rejected.data)
                                );
                        }}
                    >
                        {({ setFieldValue }) => (
                            <Form id="btnId">
                                {/* department */}
                                <div className="form-control">
                                    <label htmlFor="department">
                                        department
                                    </label>
                                    <Field
                                        name="department"
                                        value={item}
                                        as="select"
                                        onChange={(e) => {
                                            setItem(e.target.value);
                                        }}
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
                                        <ErrorMessage name="department" />
                                    </div>
                                </div>
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
                                {/* productName */}
                                <div className="form-control">
                                    <label htmlFor="productName">
                                        product name
                                    </label>
                                    <Field name="productName" type="text" />
                                    <div className="ErrorMessageTxt">
                                        <ErrorMessage name="productName" />
                                    </div>
                                </div>
                                {/* description */}
                                <div className="form-control">
                                    <label htmlFor="description">
                                        description
                                    </label>
                                    <Field name="description" as="textarea" />
                                    <div className="ErrorMessageTxt">
                                        <ErrorMessage name="description" />
                                    </div>
                                </div>
                                {/* price */}
                                <div className="form-control">
                                    <label htmlFor="price">price</label>
                                    <Field name="price" type="text" />
                                    <div className="ErrorMessageTxt">
                                        <ErrorMessage name="price" />
                                    </div>
                                </div>
                                {/* stock */}
                                <div className="form-control">
                                    <label htmlFor="stock">stock</label>
                                    <Field name="stock" type="text" />
                                    <div className="ErrorMessageTxt">
                                        <ErrorMessage name="stock" />
                                    </div>
                                </div>
                                {/* images */}
                                <div className="form-control">
                                    <label htmlFor="images">images</label>
                                    <Field
                                        name="images"
                                        type="file"
                                        multiple
                                        accept="image/png, image/jpeg"
                                        onChange={(e) => {
                                            setFieldValue(
                                                "images",
                                                e.target.value
                                            );
                                            setFiles(e.target.files);
                                        }}
                                    />
                                    <div className="ErrorMessageTxt">
                                        <ErrorMessage name="images" />
                                    </div>
                                </div>
                                {/* cod */}
                                <div className="form-control">
                                    <label htmlFor="cod">
                                        cash on delivery
                                    </label>
                                    <Field
                                        name="cod"
                                        type="checkbox"
                                        className="checkboxStyle"
                                    />
                                    <ErrorMessage name="cod" />
                                </div>
                                {/* brand */}
                                <div className="form-control">
                                    <label htmlFor="brand">brand</label>
                                    <Field name="brand" type="text" />
                                    <div className="ErrorMessageTxt">
                                        <ErrorMessage name="brand" />
                                    </div>
                                </div>
                                {/* weigth */}
                                <div className="form-control">
                                    <label htmlFor="weigth">weigth</label>
                                    <Field name="weigth" type="text" />
                                    <div className="ErrorMessageTxt">
                                        <ErrorMessage name="weigth" />
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
