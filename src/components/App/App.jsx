import { useDispatch, useSelector } from "react-redux";
import ContactForm from "../ContactForm/ContactForm";
import ContactList from "../ContactList/ContactList";
import SearchBox from "../SearchBox/SearchBox";
import s from "./App.module.css";
import { selectIsLoading } from "../../redux/selectors";
import { useEffect } from "react";
import { fetchContactsThunk } from "../../redux/contactsOps";

function App() {
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContactsThunk());
  }, [dispatch]);
  return (
    <>
      <div className={s.formWrapper}>
        <h1 className={s.title}>Phonebook</h1>
        <ContactForm />
        <SearchBox />
        <ContactList />
        {isLoading && <p>Loading...</p>}
      </div>
    </>
  );
}

export default App;
