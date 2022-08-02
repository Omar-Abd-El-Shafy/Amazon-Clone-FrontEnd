import React, { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";

export default function AddProduct() {
  const [item, setItem] = useState("");

  useEffect(() => {
    console.log("item", item);
  }, [item]);

  const schema = yup.object().shape({
    department: yup.string().required("Required"),
    category: yup.string().required("Required"),
    productName: yup.string().required("Required"),
    description: yup.string().required("Required"),
    price: yup.number().required("Required"),
    stock: yup.number().required("Required"),
    images: yup.string().required("Required"),
    cod: yup.boolean().required("Required"),
    brand: yup.string().required("Required"),
    weigth: yup.number().required("Required"),
  });

  const lookup = {
    "": [],
    "Option 1": [
      "Option 1 - Choice 1",
      "Option 1 - Choice 2",
      "Option 1 - Choice 3",
    ],
    "Option 2": ["Option 2 - Choice 1", "Option 2 - Choice 2"],
    "Option 3": ["Option 3 - Choice 1"],
  };

  return (
    <div>
      <h1>add Product</h1>
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
          // same shape as initial values
          console.log(values);
        }}
      >
        <Form>
          {/* department */}
          <div className="form-control">
            <label htmlFor="department">department</label>
            <Field
              name="department"
              value={item}
              as="select"
              onChange={(e) => {
                setItem(e.target.value);
                console.log(e.target.value);
                // console.log(item);
              }}
            >
              <option value="" disabled>
                Select an option
              </option>
              <option value="Option 1">Option 1</option>
              <option value="Option 2">Option 2</option>
              <option value="Option 3">Option 3</option>
            </Field>
            <ErrorMessage name="department" />
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
            <ErrorMessage name="category" />
          </div>
          {/* productName */}
          <div className="form-control">
            <label htmlFor="productName">product name</label>
            <Field name="productName" type="text" />
            <ErrorMessage name="productName" />
          </div>
          {/* description */}
          <div className="form-control">
            <label htmlFor="description">description</label>
            <Field name="description" as="textarea" />
            <ErrorMessage name="description" />
          </div>
          {/* price */}
          <div className="form-control">
            <label htmlFor="price">price</label>
            <Field name="price" type="text" />
            <ErrorMessage name="price" />
          </div>
          {/* stock */}
          <div className="form-control">
            <label htmlFor="stock">stock</label>
            <Field name="stock" type="text" />
            <ErrorMessage name="stock" />
          </div>
          {/* images */}
          <div className="form-control">
            <label htmlFor="images">images</label>
            <Field
              name="images"
              type="file"
              multiple
              accept="image/png, image/jpeg"
              // onChange={(e) => {
              //   // console.log(e.target.files[0].name, e.target.files[1].name);
              // }}
            />
            <ErrorMessage name="images" />
          </div>
          {/* cod */}
          <div className="form-control">
            <label htmlFor="cod">cash on delivery</label>
            <Field name="cod" type="checkbox" />
            <ErrorMessage name="cod" />
          </div>
          {/* brand */}
          <div className="form-control">
            <label htmlFor="brand">brand</label>
            <Field name="brand" type="text" />
            <ErrorMessage name="brand" />
          </div>
          {/* weigth */}
          <div className="form-control">
            <label htmlFor="weigth">weigth</label>
            <Field name="weigth" type="text" />
            <ErrorMessage name="weigth" />
          </div>

          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
}
