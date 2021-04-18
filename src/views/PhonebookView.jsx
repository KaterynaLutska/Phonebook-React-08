import ContactForm from '../components/ContactForm';
import Filter from '../components/Filter';
import ContactList from '../components/ContactList';
import { connect } from 'react-redux';
import { contactsOperations } from '../redux/phonebook';
import { Component } from 'react';
import { contactsSelectors } from '../redux/phonebook';
import { authSelectors } from '../redux/auth';

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
            <h2>Contacts</h2>
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
  //isAuthenticated: authSelectors.getIsAuthenticated(state),
});

const mapDispatchToProps = {
  fetchContacts: contactsOperations.fetchContacts,
};

export default connect(mapStateToProps, mapDispatchToProps)(PhonebookView);
