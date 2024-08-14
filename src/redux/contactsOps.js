import axios from "axios";
import { fetchData, setErrorStatus } from "./contactsSlice";

axios.defaults.baseURL = "https://66bc529424da2de7ff6a0073.mockapi.io/";

export const fetchContactsThunk = () => async (dispatch) => {
  try {
    const response = await axios.get("contacts");
    console.log(response.data);
    dispatch(fetchData(response.data));
  } catch (error) {
    dispatch(setErrorStatus(true));
  }
};
