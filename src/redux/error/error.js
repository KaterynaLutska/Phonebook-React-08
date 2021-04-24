import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import { authActions } from '../auth';
import {
  fetchContactsError,
  editContactError,
  addContactError,
  deleteContactError,
} from '../phonebook';

const setError = (_, { payload }) => payload;

const error = createReducer(null, {
  [authActions.registerError]: setError,
  [authActions.loginError]: setError,
  [authActions.logoutError]: setError,
  [fetchContactsError]: setError,
  [editContactError]: setError,
  [addContactError]: setError,
  [deleteContactError]: setError,
});

export default combineReducers({ error });
