import { useDispatch, useSelector } from "react-redux";
import { selectIsError, selectIsLoading } from "../../redux/selectors";
import { useEffect } from "react";
import { fetchContactsThunk } from "../../redux/contactsOps";
import ContactForm from "../../components/ContactForm/ContactForm";
import SearchBox from "../../components/SearchBox/SearchBox";
import ContactList from "../../components/ContactList/ContactList";
import s from "./ContactsPage.module.css";

export default function ContactsPage() {
  const isLoading = useSelector(selectIsLoading);
  const isError = useSelector(selectIsError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContactsThunk());
  }, [dispatch]);

  return (
    <div className={s.formWrapper}>
      <h1 className={s.title}>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
      {isLoading && <p>Loading...</p>}
      {isError && <p>Something went wrong!</p>}
    </div>
  );
}
