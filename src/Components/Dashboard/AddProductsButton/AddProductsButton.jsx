import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import axios from "axios";

export default function AddProduct() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [item, setItem] = useState("");
  const [files, setFiles] = useState({});

  useEffect(() => {
    console.log("item", item);
  }, [item]);

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

  const lookup = {
    "": [],
    "62e46ccdd282c036e6947f18": [
      "62e02d48bd5c5569a70d79b5",
      "Option 1 - Choice 2",
      "Option 1 - Choice 3",
    ],
    "Option 2": ["Option 2 - Choice 1", "Option 2 - Choice 2"],
    "Option 3": ["Option 3 - Choice 1"],
  };

  return (
    <>
      <Button variant="warning" onClick={handleShow}>
        Create Product
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
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
            onSubmit={(values) => 
              {
                const formData = new FormData();


                for(let i = 0 ; i < files.length; i++){
                  formData.append('img',files[i])
              }
              if(!files) return; 
              // const filess = Array.from(files);

              formData.append("brand", values.brand);
              formData.append("category", values.category);
              formData.append("cod", values.cod);
              formData.append("department", values.department);
              formData.append("description", values.description);
              // formData.append("img", files[0]);
              formData.append("price", values.price);
              formData.append("name", values.productName);
              formData.append("stock", values.stock);
              formData.append("weight", values.weigth);

               console.log(files);

              axios.post(
                "https://amazon-clone-deploy.herokuapp.com/product/",
                formData
              );
            }}
          >
            {({ setFieldValue }) => (
              <Form id="btnId">
                {/* department */}
                <div className="form-control">
                  <label htmlFor="department">department</label>
                  <Field
                    name="department"
                    value={item}
                    as="select"
                    onChange={(e) => {
                      setItem(e.target.value);
                      // console.log(e.target.value);
                      // console.log(item);
                    }}
                  >
                    <option value="" disabled>
                      Select an option
                    </option>
                    <option value="62e46ccdd282c036e6947f18">Option 1</option>
                    <option value="Option 2">Option 2</option>
                    <option value="Option 3">Option 3</option>
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
                    {lookup[item].map((el, i) => {
                      return (
                        <option key={i} value={el}>
                          {el}
                        </option>
                      );
                    })}
                  </Field>
                  <div className="ErrorMessageTxt">
                    <ErrorMessage name="category" />
                  </div>
                </div>
                {/* productName */}
                <div className="form-control">
                  <label htmlFor="productName">product name</label>
                  <Field name="productName" type="text" />
                  <div className="ErrorMessageTxt">
                    <ErrorMessage name="productName" />
                  </div>
                </div>
                {/* description */}
                <div className="form-control">
                  <label htmlFor="description">description</label>
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
                      setFieldValue("images", e.target.value);
                      setFiles(e.target.files);
                    }}
                  />
                  <div className="ErrorMessageTxt">
                    <ErrorMessage name="images" />
                  </div>
                </div>
                {/* cod */}
                <div className="form-control">
                  <label htmlFor="cod">cash on delivery</label>
                  <Field name="cod" type="checkbox" className="checkboxStyle" />
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
