import { Link } from "react-router-dom";
import LoginForm from "../../components/LoginForm/LoginForm";

export default function LoginPage() {
  return (
    <>
      <LoginForm />
      <p>
        You don`t have account?<Link to="/register">Sing up</Link>
      </p>
    </>
  );
}
