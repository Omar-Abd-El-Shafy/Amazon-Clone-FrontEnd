import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import {
  useGetAllCategoriesQuery,
  useGetdAlldepartmentQuery,
  useUpdateCategoryMutation,
} from "../../../Redux/Api";

export default function AddCategoryImage() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  // const [file, setFile] = useState();

  const loggedInUser = useSelector((state) => state.user.loggedInUser);
  const { data: categories } = useGetAllCategoriesQuery();
  // const { data: departments } = useGetdAlldepartmentQuery();
  const [updateCategory, { isError }] = useUpdateCategoryMutation();

  const schema = yup.object().shape({
    category: yup.string().required("Required Field"),
    // department: yup.string().required("Required Field"),
    //name: yup.string().required("Required Field"),
    image: yup.string().required("Required Field"),
  });
  //>>>>>>> e04e9b468c61ba286a6c09b8bc96d1923f18f1fb

  return (
    <>
      <Button variant="warning" onClick={handleShow} className="crudBtn">
        Update Category
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Update Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Formik
            enableReinitialize
            initialValues={{
              category: "",
              image: "",
            }}
            validationSchema={schema}
            onSubmit={(values) => {
              const formData = new FormData();

              formData.append("file", values.image);

              console.log(values);
              updateCategory({
                token: loggedInUser?.token,
                id: values.category,
                body: {
                  img: formData,
                },
              })
                .unwrap()
                .then((fulfilled) => {
                  toast.success(`Category updated Successfully`, {
                    position: "bottom-center",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                  });
                })
                .catch((rejected) => console.error(rejected.data));
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
                      setFieldValue("category", e.target.value);
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
                      <option key={cate._id} value={cate._id}>
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
                  <label htmlFor="image">images</label>
                  <Field
                    name="image"
                    type="file"
                    accept="image/png, image/jpeg"
                    onChange={(e) => {
                      setFieldValue("image", e.target.value);
                      // setFile(e.target.files);
                    }}
                  />
                  <div className="ErrorMessageTxt">
                    <ErrorMessage name="images" />
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
