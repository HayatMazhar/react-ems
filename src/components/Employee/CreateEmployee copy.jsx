import React, { useState } from "react";
import {
  Formik,
  Form,
  Field,
  ErrorMessage,
  FieldArray,
  FastField,
} from "formik";
import * as Yup from "yup";
import TextError from "../Shared/TextError";

const initialValues = {
  name: "Mazhar",
  email: "",
  channel: "",
  comments: "",
  address: "",
  social: {
    facebook: "",
    twitter: "",
  },
  phoneNumbers: ["", ""],
  phNumbers: [""],
};

const savedValues = {
  name: "Mazhar Hayat",
  email: "mazhar1783@outlook.com",
  channel: "pakistan",
  comments: "Welcome to Formik",
  address: "Ajman, UAE",
  social: {
    facebook: "",
    twitter: "",
  },
  phoneNumbers: ["", ""],
  phNumbers: [""],
};

const onSubmit = (values, submitProps) => {
  console.log("Form data", values);
  console.log("submitProps", submitProps);
  submitProps.setSubmitting(false);
  submitProps.resetForm();
};

const validationSchema = Yup.object({
  name: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email format").required("Required"),
  channel: Yup.string().required("Required"),
  comments: Yup.string().required("Required"),
});

const validateComments = (value) => {
  let error;
  if (!value) {
    error = "Required";
  }
  return error;
};

function EmployeeCreateForm() {
  const [formValues, setFormValues] = useState(null);
  return (
    <Formik
      initialValues={formValues || initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
      enableReinitialize
      // validateOnChange={false}
      // validateOnBlur={false}
      // validateOnMount
    >
      {(formik) => {
        console.log("Formik props", formik);
        return (
          <Form>
            <div className="employeemain mb-4">
              <h1 className="mb-4"> Create Employee</h1>

              <div className="row">
                <div className="form-group col-6">
                  <label htmlFor="name" class="label label-default">Name</label>
                  <Field
                    type="text"
                    className="form-control "
                    id="name"
                    name="name"
                  />
                  <ErrorMessage name="name" component={TextError} />
                </div>

                <div className="form-group col-6">
                  <label htmlFor="email">Email</label>
                  <Field
                    type="email"
                    id="email"
                    className="form-control"
                    name="email"
                  />
                  <ErrorMessage name="email">
                    {(error) => <div className="error">{error}</div>}
                  </ErrorMessage>
                </div>
              </div>

              <div className="row">
              <div className="form-group col-6">
                <label htmlFor="channel">Channel</label>
                <Field
                  type="text"
                  className="form-control"
                  id="channel"
                  name="channel"
                  placeholder="YouTube channel name"
                />
                <ErrorMessage name="channel" />
              </div>

              <div className="form-group col-6">
                <label htmlFor="comments">Comments</label>
                <Field
                  as="textarea"
                  id="comments"
                  className="form-control"
                  name="comments"
                  validate={validateComments}
                />
                <ErrorMessage name="comments" component={TextError} />
              </div>
              </div>

              <div className="row">
              <div className="form-group col-12">
                <label htmlFor="address">Address</label>
                <FastField name="address">
                  {({ field, form, meta }) => {
                    // console.log('Field render')
                    return (
                      <div>
                        <input
                          type="text"
                          className="form-control"
                          {...field}
                        />
                        {meta.touched && meta.error ? (
                          <div>{meta.error}</div>
                        ) : null}
                      </div>
                    );
                  }}
                </FastField>
              </div>

              </div>

              <div className="row">
              <div className="form-group col-6">
                <label htmlFor="facebook">Facebook profile</label>
                <Field
                  type="text"
                  className="form-control"
                  id="facebook"
                  name="social.facebook"
                />
              </div>

              <div className="form-group col-6">
                <label htmlFor="twitter">Twitter profile</label>
                <Field
                  type="text"
                  className="form-control"
                  id="twitter"
                  name="social.twitter"
                />
              </div>
              </div>
            
            
              <div className="row">
              <div className="form-group col-6">
                <label htmlFor="primaryPh">Primary phone number</label>
                <Field
                  type="text"
                  className="form-control"
                  id="primaryPh"
                  name="phoneNumbers[0]"
                />
              </div>

              <div className="form-group col-6">
                <label htmlFor="secondaryPh">Secondary phone number</label>
                <Field
                  type="text"
                  className="form-control"
                  id="secondaryPh"
                  name="phoneNumbers[1]"
                />
              </div>

              </div>

              <div className="row">
              <div className="form-group col-12">
                <label>List of phone numbers</label>
                <FieldArray name="phNumbers" className="form-group col-12">
                  {(fieldArrayProps) => {
                    const { push, remove, form } = fieldArrayProps;
                    const { values } = form;
                    const { phNumbers } = values;
                    // console.log('fieldArrayProps', fieldArrayProps)
                    // console.log('Form errors', form.errors)
                    return (
                      <div className="form-group">
                        {phNumbers.map((phNumber, index) => (
                          <div key={index}>
                            <Field name={`phNumbers[${index}]`} className="form-group col-6" />
                            {index > 0 && (
                              <button
                                type="button"  className="btn-danger"
                                onClick={() => remove(index)}
                              >
                                -
                              </button>
                            )}
                          </div>
                        ))}
                        <button type="button" className="btn-primary" onClick={() => push("")}>
                          +
                        </button>
                      </div>
                    );
                  }}
                </FieldArray>
              </div>
              </div>
              <button type="button" className="btn btn-success mr-2" size="lg" onClick={() => setFormValues(savedValues)}>
                Load saved data
              </button>
              <button type="reset" className="btn btn-secondary mr-2" onClick={() => setFormValues(null)}>Reset</button>
              <button
                type="submit" className="btn btn-primary mr-2"
                disabled={!formik.isValid || formik.isSubmitting}
              >
                Submit
              </button>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
}

export default EmployeeCreateForm;
