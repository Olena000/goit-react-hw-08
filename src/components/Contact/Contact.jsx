import { useDispatch } from "react-redux";
import s from "./Contact.module.css";
import { deleteContactThunk } from "../../redux/contactsOps";

export default function Contact({ id, name, number }) {
  const dispatch = useDispatch();
  return (
    <li className={s.contactItem}>
      <div>
        <p>{name}</p>
        <p>{number}</p>
      </div>
      <button type="button" onClick={() => dispatch(deleteContactThunk(id))}>
        Delete
      </button>
    </li>
  );
}
