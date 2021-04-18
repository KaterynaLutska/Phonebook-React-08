import ContactForm from '../components/ContactForm';
import Filter from '../components/Filter';
import ContactList from '../components/ContactList';

import { connect } from 'react-redux';
import { contactsOperations } from '../redux/phonebook';
import { Component } from 'react';
import { contactsSelectors } from '../redux/phonebook';

class PhonebookView extends Component {
  componentDidMount() {
    this.props.fetchContacts();
  }

  render() {
    const { items } = this.props;
    return (
      <>
        <ContactForm />
        {items.length > 0 && (
          <>
            <Filter />
            <ContactList />
          </>
        )}
      </>
    );
  }
}
const mapStateToProps = state => ({
  items: contactsSelectors.contactsArray(state),
});

const mapDispatchToProps = {
  fetchContacts: contactsOperations.fetchContacts,
};

export default connect(mapStateToProps, mapDispatchToProps)(PhonebookView);
