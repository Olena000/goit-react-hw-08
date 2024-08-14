import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [
    { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
    { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
    { id: "id-3", name: "Eden Clements", number: "645-17-79" },
    { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  ],
  loading: false,
  error: null,
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    setLoadingStatus: (state, action) => {
      state.loading = action.payload;
    },
    setErrorStatus: (state, action) => {
      state.error = action.payload;
    },
    fetchData: (state, action) => {
      state.items = action.payload;
    },
    deleteContact: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    addContact: (state, action) => {
      state.items.push(action.payload);
    },
  },
});

export const contactsReducer = contactsSlice.reducer;
export const {
  deleteContact,
  addContact,
  setLoadingStatus,
  setErrorStatus,
  fetchData,
} = contactsSlice.actions;
