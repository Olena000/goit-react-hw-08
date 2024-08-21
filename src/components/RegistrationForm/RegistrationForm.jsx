import { Field, Form, Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { registerThunk } from "../../redux/auth/operations";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { Navigate } from "react-router-dom";
import s from "./RegistrationForm.module.css";

export default function RegistrationForm() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const dispatch = useDispatch();
  const initialValues = {
    name: "",
    email: "",
    password: "",
  };

  const handleSubmit = (values, options) => {
    console.log(values);
    dispatch(registerThunk(values));
    options.resetForm();
  };
  if (isLoggedIn) {
    return <Navigate to="/" />;
  }
  return (
    <div className={s.formWrapper}>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form className={s.form}>
          <Field
            className={s.input}
            name="name"
            placeholder="Enter your name"
          ></Field>
          <Field
            className={s.input}
            name="email"
            placeholder="Enter your email"
          ></Field>
          <Field
            className={s.input}
            name="password"
            type="password"
            placeholder="Enter your password"
          ></Field>
          <button type="submit">Register</button>
        </Form>
      </Formik>
    </div>
  );
}
