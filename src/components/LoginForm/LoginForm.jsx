import { Field, Form, Formik } from "formik";
import { Link } from "react-router-dom";

export default function LoginForm() {
  const initialValues = {
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
          <Field name="email" placeholder="Enter your email"></Field>
          <Field
            name="password"
            type="password"
            placeholder="Enter your password"
          ></Field>
          <button type="submit">Login</button>
          <p>
            You don't have account?<Link to="/register">Sing up</Link>
          </p>
        </Form>
      </Formik>
    </div>
  );
}
