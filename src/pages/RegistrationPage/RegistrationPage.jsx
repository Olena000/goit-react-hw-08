import { Link } from "react-router-dom";
import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";
import s from "./RegistrationPage.module.css";

export default function RegistrationPage() {
  return (
    <div>
      <RegistrationForm />
      <p className={s.text}>
        You already have account?
        <Link className={s.link} to="/login">
          Sing in
        </Link>
      </p>
    </div>
  );
}
