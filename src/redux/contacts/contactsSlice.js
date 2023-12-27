import { createSlice, nanoid } from '@reduxjs/toolkit';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [],
  },
  reducers: {
    addContactAction: {
      prepare: (name, number) => {
        const id = nanoid();
        return { payload: { id, name, number } };
      },
      reducer: (state, action) => {
        state.contacts.push(action.payload);
      },
    },
    deleteContactAction(state, action) {
      state.contacts = state.contacts.filter(el => el.id !== action.payload);
    },
  },
});
export const { addContactAction, deleteContactAction } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
