import { connect } from 'react-redux';
import { contactsOperations } from '../../redux/phonebook';
import { contactsSelectors } from '../../redux/phonebook';
import ContactList from './ContactList';
import img from '../../images/face.png';
import { changeContactSuccess } from '../../redux/phonebook/phonebook-actions';

const mapStateToProps = state => ({
  contacts: contactsSelectors.getVisibleContacts(state),
  avatar: img,
});

const mapDispatchToProps = dispatch => ({
  onDelete: id => dispatch(contactsOperations.deleteContacts(id)),
  //onChange: id => dispatch(contactsOperations.changeContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
