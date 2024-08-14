import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import s from "./ContactList.module.css";
import { selectContacts, selectFilters } from "../../redux/selectors";

export default function ContactList() {
  const contacts = useSelector(selectContacts) || [];
  const filter = useSelector(selectFilters) || "";

  const filteredContacts = contacts.filter((item) =>
    item.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ul className={s.contactList}>
      {filteredContacts.map(({ id, name, number }) => (
        <Contact key={id} id={id} name={name} number={number} />
      ))}
    </ul>
  );
}
