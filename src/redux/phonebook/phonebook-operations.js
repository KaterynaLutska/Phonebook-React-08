import axios from 'axios';

import {
  fetchContactsRequest,
  fetchContactsSuccess,
  fetchContactsError,
  addContactsRequest,
  addContactsSuccess,
  addContactsError,
  deleteContactsRequest,
  deleteContactsSuccess,
  deleteContactsError,
} from './phonebook-actions';

const fetchContacts = () => async dispatch => {
  dispatch(fetchContactsRequest());

  try {
    const response = await axios.get('/contacts');

    dispatch(fetchContactsSuccess(response.data));
  } catch (error) {
    dispatch(fetchContactsError(error.message));
  }
};

const addContact = contact => async dispatch => {
  dispatch(addContactsRequest());

  try {
    const response = await axios.post('/contacts', contact);
    dispatch(addContactsSuccess(response.data));
  } catch (error) {
    dispatch(addContactsError(error.message));
  }
};

const deleteContacts = id => async dispatch => {
  dispatch(deleteContactsRequest());

  try {
    const response = await axios.delete(`/contacts/${id}`);
    dispatch(deleteContactsSuccess(id));
  } catch (error) {
    dispatch(deleteContactsError(error.message));
  }
};

export default { fetchContacts, addContact, deleteContacts };
