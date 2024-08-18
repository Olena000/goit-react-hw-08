import { Link } from "react-router-dom";
import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";

export default function RegistrationPage() {
  return (
    <>
      <RegistrationForm />
      <p>
        You already have account?<Link to="/login">Sing in</Link>
      </p>
    </>
  );
}
