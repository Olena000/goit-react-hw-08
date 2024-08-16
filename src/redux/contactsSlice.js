import { createSlice } from "@reduxjs/toolkit";
import {
  addContactThunk,
  deleteContactThunk,
  fetchContactsThunk,
} from "./contactsOps";

const initialState = {
  items: [],
  loading: false,
  error: null,
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchContactsThunk.fulfilled, (state, action) => {
        state.items = action.payload;
        state.loading = false;
      })
      .addCase(fetchContactsThunk.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(deleteContactThunk.fulfilled, (state, action) => {
        state.items = state.items.filter((item) => item.id !== action.payload);
      })
      .addCase(deleteContactThunk.rejected, (state, action) => {
        state.error = true;
      })
      .addCase(addContactThunk.fulfilled, (state, action) => {
        state.items.push(action.payload);
      });
  },
});

export const contactsReducer = contactsSlice.reducer;
