import { Field, Form, Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { loginThunk } from "../../redux/auth/operations";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { Navigate } from "react-router-dom";
import s from "./LoginForm.module.css";

export default function LoginForm() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const dispatch = useDispatch();
  const initialValues = {
    email: "",
    password: "",
  };

  const handleSubmit = (values, options) => {
    dispatch(loginThunk(values));
    console.log(values);
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
            name="email"
            placeholder="Enter your email"
          ></Field>
          <Field
            className={s.input}
            name="password"
            type="password"
            placeholder="Enter your password"
          ></Field>
          <button type="submit">Login</button>
        </Form>
      </Formik>
    </div>
  );
}
