import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://66bc529424da2de7ff6a0073.mockapi.io/";

export const fetchContactsThunk = createAsyncThunk(
  "fetchContacts",
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get("contacts");
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContactThunk = createAsyncThunk(
  "deleteContact",
  async (id, thunkAPI) => {
    try {
      await axios.delete("contacts/${id}");
      return id;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// export const deleteContactThunk = (id) => async (dispatch) => {
//     try {
//       dispatch(setLoadingStatus(true));
//       await axios.delete(`contacts/${id}`);
//       dispatch(deleteContact(id));
//     } catch (error) {
//       dispatch(setErrorStatus(true));
//     } finally {
//       dispatch(setLoadingStatus(false));
//     }
// };
