import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';

import {
  fetchContactsSuccess,
  addContactSuccess,
  deleteContactSuccess,
  changeFilter,
  editContactSuccess,
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

export default combineReducers({
  items,
  filter,
  modal,
});
