import { useDispatch, useSelector } from "react-redux";
import { selectIsError, selectIsLoading } from "../../redux/selectors";
import { useEffect } from "react";
import ContactForm from "../../components/ContactForm/ContactForm";
import SearchBox from "../../components/SearchBox/SearchBox";
import ContactList from "../../components/ContactList/ContactList";
import s from "./ContactsPage.module.css";
import { FaAddressBook } from "react-icons/fa";
import Loader from "../../components/Loader/Loader";
import { fetchContactsThunk } from "../../redux/contacts/operations";

export default function ContactsPage() {
  const isLoading = useSelector(selectIsLoading);
  const isError = useSelector(selectIsError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContactsThunk());
  }, [dispatch]);

  return (
    <div className={s.formWrapper}>
      <h1 className={s.title}>
        <FaAddressBook className={s.icon} />
        Phonebook
      </h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
      {isLoading && <Loader />}
      {isError && <p>Something went wrong!</p>}
    </div>
  );
}
