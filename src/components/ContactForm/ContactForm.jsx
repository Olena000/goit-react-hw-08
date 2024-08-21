import { ErrorMessage, Field, Form, Formik } from "formik";
import s from "./ContactForm.module.css";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { addContactThunk } from "../../redux/contacts/operations";

export default function ContactForm() {
  const dispatch = useDispatch();
  const initialValues = {
    name: "",
    number: "",
  };

  const registerSchema = Yup.object({
    name: Yup.string()
      .required("This field is required")
      .min(3, "Name must be more than 3 chars!")
      .max(50, "Name must be less than 50 chars!"),
    number: Yup.string()
      .required("This field is required")
      .min(3, "Number must be more than 3 chars!")
      .max(50, "Number must be less than 50 chars!")
      .matches(/^\d+$/, "Number must contain only digits"),
  });

  const handleSubmit = (data, actions) => {
    dispatch(addContactThunk(data));
    console.log(data);

    actions.resetForm();
  };

  return (
    <div className={s.formWrapper}>
      <Formik
        validationSchema={registerSchema}
        initialValues={initialValues}
        onSubmit={handleSubmit}
      >
        <Form className={s.form}>
          <label className={s.label}>
            <span>Name</span>
            <Field className={s.input} name="name"></Field>
            <ErrorMessage
              name="name"
              component="span"
              className={s.error}
            ></ErrorMessage>
          </label>
          <label className={s.label}>
            <span>Number</span>
            <Field className={s.input} name="number"></Field>
            <ErrorMessage
              name="number"
              component="span"
              className={s.error}
            ></ErrorMessage>
          </label>
          <button type="submit">Add contact</button>
        </Form>
      </Formik>
    </div>
  );
}
