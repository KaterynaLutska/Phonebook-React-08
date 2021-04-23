import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';

import {
  fetchContactsRequest,
  fetchContactsSuccess,
  fetchContactsError,
  addContactRequest,
  addContactSuccess,
  addContactError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
  changeFilter,
  editContactRequest,
  editContactSuccess,
  editContactError,
  openModal,
  closeModal,
} from './phonebook-actions';

const items = createReducer([], {
  [fetchContactsSuccess]: (_, { payload }) => payload,
  [addContactSuccess]: (state, { payload }) => [...state, payload],
  [deleteContactSuccess]: (state, { payload }) =>
    state.filter(el => el.id !== payload),
  [editContactSuccess]: (state, { payload }) =>
    state.map(el => (el.id !== payload.id ? el : payload)),
});

const filter = createReducer('', {
  [changeFilter]: (_, { payload }) => payload,
});

const modal = createReducer(false, {
  [openModal]: () => true,
  [closeModal]: () => false,
  [editContactSuccess]: () => false,
});

const loading = createReducer(false, {
  [fetchContactsRequest]: () => true,
  [fetchContactsSuccess]: () => false,
  [fetchContactsError]: () => false,
  [addContactRequest]: () => true,
  [addContactSuccess]: () => false,
  [addContactError]: () => false,
  [deleteContactRequest]: () => true,
  [deleteContactSuccess]: () => false,
  [deleteContactError]: () => false,
  [editContactRequest]: () => true,
  [editContactError]: () => false,
  [editContactSuccess]: () => false,
});

const error = createReducer(null, {});

export default combineReducers({
  items,
  loading,
  filter,
  error,
  modal,
});
