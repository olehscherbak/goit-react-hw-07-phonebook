import { createSlice } from '@reduxjs/toolkit';
const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [
      { id: 'id1', name: 'oleh', number: '123456' },
      { id: 'id2', name: 'olelele', number: '789456' },
      { id: 'id3', name: 'ole-olo-ole', number: '654987123' },
    ],
    isLoading: false,
    error: null,
  },
  reducers: {
    addContact(state, action) {
      state.items.push(action.payload);
    },
    deleteContact(state, action) {
      state.items = state.items.filter(
        contact => contact.id !== action.payload
      );
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;

const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    filterChange(state, action) {
      return action.payload;
    },
  },
});

export const { filterChange } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
