import React, { useState } from "react";
import * as yup from "yup"; // for everything
import { Button, Col, InputGroup, Form } from "react-bootstrap";
import { Formik } from "formik";

const initialValues = {
  firstName: "Mazhar",
  lastName: "",
  username: "",
  city: "",
  state: "",
  zip: "",
};

const savedValues = {
  firstName: "Hayat",
  lastName: "Mazhar",
  userName: "Mazhar1783",
  city: "Dubai",
  state: "Ajman",
  zip: "",
};
const onSubmit = (values, submitProps) => {
  console.log("Form data", values);
  console.log("submitProps", submitProps);
  submitProps.setSubmitting(false);
  submitProps.resetForm();
};

const validationSchema = yup.object({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  email: yup.string().email("Invaid email format").required(),
  city: yup.string().required(),
  state: yup.string().required(),
  zip: yup.string().required(),
  terms: yup.bool().required(),
});

function EmployeeCreateForm() {
  const [formValues, setFormValues] = useState(null);
  return (
    <div className="employeemain mb-4">
      <h1 className="mb-4"> Create Employee</h1>
      <Formik
        validationSchema={validationSchema}
        onSubmit={onSubmit}
        initialValues={formValues || initialValues}
        enableReinitialize
      >
        {(formik) => {
          console.log("Formik props", formik);
          return (
            <Form
              noValidate
              onReset={formik.handleReset}
              onSubmit={formik.handleSubmit}
            >
              <Form.Row>
                <Form.Group as={Col} md="4" controlId="validationFormik01">
                  <Form.Label>First name</Form.Label>
                  <Form.Control
                    type="text"
                    name="firstName"
                    value={formik.values.firstName}
                    onChange={formik.handleChange}
                    isValid={
                      formik.touched.firstName && !formik.errors.firstName
                    }
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="4" controlId="validationFormik02">
                  <Form.Label>Last name</Form.Label>
                  <Form.Control
                    type="text"
                    name="lastName"
                    value={formik.values.lastName}
                    onChange={formik.handleChange}
                    isValid={formik.touched.lastName && !formik.errors.lastName}
                  />

                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="4" controlId="validationFormikEmail">
                  <Form.Label>Email</Form.Label>
                  <InputGroup>
                    <InputGroup.Prepend>
                      <InputGroup.Text id="inputGroupPrepend">
                        @
                      </InputGroup.Text>
                    </InputGroup.Prepend>
                    <Form.Control
                      type="text"
                      placeholder="Email"
                      aria-describedby="inputGroupPrepend"
                      name="email"
                      value={formik.values.email}
                      onChange={formik.handleChange}
                      isInvalid={formik.touched.email && !!formik.errors.email}
                    />
                    <Form.Control.Feedback type="invalid">
                      {formik.errors.email}
                    </Form.Control.Feedback>
                  </InputGroup>
                </Form.Group>
              </Form.Row>
              <Form.Row>
                <Form.Group as={Col} md="6" controlId="validationFormik03">
                  <Form.Label>City</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="City"
                    name="city"
                    value={formik.values.city}
                    onChange={formik.handleChange}
                    isInvalid={formik.touched.city && !!formik.errors.city}
                  />

                  <Form.Control.Feedback type="invalid">
                    {formik.errors.city}
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="3" controlId="validationFormik04">
                  <Form.Label>State</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="State"
                    name="state"
                    value={formik.values.state}
                    onChange={formik.handleChange}
                    isInvalid={formik.touched.state && !!formik.errors.state}
                  />
                  <Form.Control.Feedback type="invalid">
                    {formik.errors.state}
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="3" controlId="validationFormik05">
                  <Form.Label>Zip</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Zip"
                    name="zip"
                    value={formik.values.zip}
                    onChange={formik.handleChange}
                    isInvalid={formik.touched.zip && !!formik.errors.zip}
                  />

                  <Form.Control.Feedback type="invalid">
                    {formik.errors.zip}
                  </Form.Control.Feedback>
                </Form.Group>
              </Form.Row>
              {/* <Form.Group>
            <Form.Check
              required
              name="terms"
              label="Agree to terms and conditions"
              onChange={handleChange}
              isInvalid={!!errors.terms}
              feedback={errors.terms}
              id="validationFormik0"
            />
          </Form.Group> */}
              <Button
                type="button"
                className="btn btn-success mr-2"
                onClick={() => setFormValues(savedValues)}
              >
                Load saved data
              </Button>
              <Button
                type="reset"
                className="btn btn-secondary mr-2"
                onClick={() => setFormValues(null)}
              >
                Reset
              </Button>
              <Button
                type="submit"
                className="btn btn-primary mr-2"
                disabled={!formik.isValid || formik.isSubmitting}
              >
                Submit
              </Button>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
}

export default EmployeeCreateForm;
