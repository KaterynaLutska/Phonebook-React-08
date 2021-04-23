import { connect } from 'react-redux';
import {
  contactsOperations,
  contactsSelectors,
  changeContact,
} from '../../redux/phonebook';
import ContactList from './ContactList';
import img from '../../images/face.png';
import {
  openModal,
  closeModal,
} from '../../redux/phonebook/phonebook-actions';

const mapStateToProps = state => ({
  contacts: contactsSelectors.getVisibleContacts(state),
  avatar: img,
  modalBoolean: contactsSelectors.getModalBoolean(state),
});

const mapDispatchToProps = {
  onDelete: id => contactsOperations.deleteContacts(id),
  onEditContact: el => contactsOperations.changeContact(el),
  openModal: openModal,
  closeModal: closeModal,
  onEditClick: changeContact,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
