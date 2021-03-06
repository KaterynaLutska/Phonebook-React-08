import { createAction } from '@reduxjs/toolkit';

export const fetchContactsRequest = createAction(
  'contacts/fetchContactsRequest',
);
export const fetchContactsSuccess = createAction(
  'contacts/fetchContactsSuccess',
);
export const fetchContactsError = createAction('contacts/fetchContactsError');

export const addContactRequest = createAction('contacts/addContactRequest');
export const addContactSuccess = createAction('contacts/addContactSuccess');
export const addContactError = createAction('contacts/addContactError');

export const deleteContactRequest = createAction(
  'contacts/deleteContactRequest',
);
export const deleteContactSuccess = createAction(
  'contacts/deleteContactSuccess',
);
export const deleteContactError = createAction('contacts/deleteContactError');

export const changeContact = createAction('contacts/changeContact');

export const editContactRequest = createAction('contacts/editContactRequest');
export const editContactSuccess = createAction('contacts/editContactSuccess');
export const editContactError = createAction('contacts/editContactError');

export const changeFilter = createAction('contacts/FILTER');

export const openModal = createAction('contacts/openModal');
export const closeModal = createAction('contacts/closeModal');
