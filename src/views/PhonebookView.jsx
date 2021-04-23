import ContactForm from '../components/ContactForm';
import Filter from '../components/Filter';
import ContactList from '../components/ContactList';

import { connect } from 'react-redux';
import { contactsOperations } from '../redux/phonebook';
import { Component } from 'react';
import { contactsSelectors } from '../redux/phonebook';
import { closeModal } from '../redux/phonebook/phonebook-actions';
import MyModal from '../components/Modal';

class PhonebookView extends Component {
  state = {
    contactForEdit: null,
  };

  componentDidMount() {
    this.props.fetchContacts();
  }

  getContactForEdit = contactForEdit => {
    this.setState({ contactForEdit });
  };

  render() {
    const { items, modalBoolean, closeModal } = this.props;
    const { contactForEdit } = this.state;
    return (
      <>
        <ContactForm />
        {items.length > 0 && (
          <>
            <Filter />
            <ContactList editContact={this.getContactForEdit} />
          </>
        )}
        <MyModal modal={modalBoolean} onCloseModal={closeModal}>
          <ContactForm editedContact={contactForEdit} />
        </MyModal>
      </>
    );
  }
}

const mapStateToProps = state => ({
  items: contactsSelectors.contactsArray(state),
  modalBoolean: contactsSelectors.getModalBoolean(state),
});

const mapDispatchToProps = {
  fetchContacts: contactsOperations.fetchContacts,
  closeModal,
};

export default connect(mapStateToProps, mapDispatchToProps)(PhonebookView);
