import { Field, Form, Formik } from "formik";
import { Link } from "react-router-dom";

export default function RegistrationForm() {
  const initialValues = {
    name: "",
    email: "",
    password: "",
  };

  const handleSubmit = (values, options) => {
    console.log(values);
    options.resetForm();
  };
  return (
    <div>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form>
          <Field name="name" placeholder="Enter your name"></Field>
          <Field name="email" placeholder="Enter your email"></Field>
          <Field
            name="password"
            type="password"
            placeholder="Enter your password"
          ></Field>
          <button type="submit">Registration</button>
          <p>
            You already have account?<Link to="/login">Sing in</Link>
          </p>
        </Form>
      </Formik>
    </div>
  );
}
