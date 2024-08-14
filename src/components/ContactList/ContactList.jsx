import { useDispatch, useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import s from "./ContactList.module.css";
import { selectContacts, selectFilters } from "../../redux/selectors";
import { useEffect } from "react";
import { fetchContactsThunk } from "../../redux/contactsOps";

export default function ContactList() {
  const contacts = useSelector(selectContacts) || [];
  const filter = useSelector(selectFilters) || "";
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContactsThunk());
  }, [dispatch]);

  const filteredContacts = contacts.filter((item) =>
    item.name.toLowerCase().includes(filter.toLowerCase())
  );

  if (filteredContacts.length === 0) {
    return <p>No contacts found.</p>;
  }

  return (
    <ul className={s.contactList}>
      {filteredContacts.map(({ id, name, number }) => (
        <Contact key={id} id={id} name={name} number={number} />
      ))}
    </ul>
  );
}
