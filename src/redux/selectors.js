export const selectContacts = (state) => state.contacts.items;

export const selectFilters = (state) => state.filters.name;

export const selectIsLoading = (state) => state.contacts.loading;

export const selectIsError = (state) => state.contacts.error;
