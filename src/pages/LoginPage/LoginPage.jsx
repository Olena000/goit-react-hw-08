import { Link } from "react-router-dom";
import LoginForm from "../../components/LoginForm/LoginForm";
import s from "./LoginPage.module.css";

export default function LoginPage() {
  return (
    <>
      <LoginForm />
      <p className={s.text}>
        You don`t have account?
        <Link className={s.link} to="/register">
          Sing up
        </Link>
      </p>
    </>
  );
}
