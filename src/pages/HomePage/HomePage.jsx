import s from "./HomePage.module.css";
import { FaRegAddressCard } from "react-icons/fa6";
export default function HomePage() {
  return (
    <h2 className={s.title}>
      Phone Book app welcome page <FaRegAddressCard size="42" />
    </h2>
  );
}
