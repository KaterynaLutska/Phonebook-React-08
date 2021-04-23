import axios from 'axios';

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
  editContactRequest,
  editContactSuccess,
  editContactError,
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
  dispatch(addContactRequest());

  try {
    const response = await axios.post('/contacts', contact);
    dispatch(addContactSuccess(response.data));
  } catch (error) {
    dispatch(addContactError(error.message));
  }
};

const deleteContacts = id => async dispatch => {
  dispatch(deleteContactRequest());

  try {
    const response = await axios.delete(`/contacts/${id}`);
    dispatch(deleteContactSuccess(id));
  } catch (error) {
    dispatch(deleteContactError(error.message));
  }
};

const changeContact = ({ name, number, id }) => async dispatch => {
  dispatch(editContactRequest());
  try {
    const response = await axios.patch(`/contacts/${id}`, { name, number });
    dispatch(editContactSuccess(response.data));
  } catch (error) {
    dispatch(editContactError(error.message));
  }
};

export default { fetchContacts, addContact, deleteContacts, changeContact };
