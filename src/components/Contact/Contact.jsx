import { useDispatch } from "react-redux";
import s from "./Contact.module.css";
import { deleteContactThunk } from "../../redux/contactsOps";
import { FaPhoneAlt } from "react-icons/fa";
import { FaUser } from "react-icons/fa";

export default function Contact({ id, name, number }) {
  const dispatch = useDispatch();
  return (
    <li className={s.contactItem}>
      <div>
        <p>
          <FaUser className={s.icon} size="24" />
          {name}
        </p>
        <p>
          <FaPhoneAlt className={s.icon} size="24" />
          {number}
        </p>
      </div>
      <button type="button" onClick={() => dispatch(deleteContactThunk(id))}>
        Delete
      </button>
    </li>
  );
}
