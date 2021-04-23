import { Component } from 'react';
import { connect } from 'react-redux';
import s from './ContactForm.module.css';
import PropTypes from 'prop-types';

import {
  closeModal,
  contactsOperations,
  contactsSelectors,
} from '../../redux/phonebook';
import MyButton from '../Button';

import { Container, Input, InputAdornment } from '@material-ui/core';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import CallIcon from '@material-ui/icons/Call';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
    id: '',
  };

  componentDidMount() {
    const { editedContact } = this.props;
    if (editedContact) {
      const { id, name, number } = editedContact;
      this.setState({ id, name, number });
    }
  }

  handleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    const { contacts } = this.props;
    const { name, number, id } = this.state;

    let newContact;
    this.reset();

    if (id) {
      this.props.onEdit(this.state);
      return;
    }

    if (contacts.find(el => el.name.toLowerCase() === name.toLowerCase())) {
      return alert(`${name} is already in contacts`);
    } else if (contacts.some(el => el.number === number)) {
      return alert(`Number ${number} is already in contacts`);
    } else {
      newContact = {
        name: name,
        number: number,
      };
    }
    return this.props.onSubmit(newContact);
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;
    const { editedContact } = this.props;

    return (
      <Container maxWidth="sm">
        <form onSubmit={this.handleSubmit}>
          <div className={s.phonebookInputFields}>
            <label htmlFor={this.nameInputId} className="phonebook-label">
              <Input
                className={s.phonebookInput}
                startAdornment={
                  <InputAdornment position="start">
                    <AccountCircleIcon />
                  </InputAdornment>
                }
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                value={name}
                title="The name can only consist of letters, apostrophes, dashes and spaces. For example: Jacob Mercer..."
                placeholder="name"
                onChange={this.handleChange}
                required
              />
            </label>
            <label className="phonebook-label">
              <Input
                startAdornment={
                  <InputAdornment position="start">
                    <CallIcon />
                  </InputAdornment>
                }
                className={s.phonebookInput}
                type="tel"
                name="number"
                value={number}
                pattern="(\+?( |-|\.)?\d{1,2}( |-|\.)?)?(\(?\d{3}\)?|\d{3})( |-|\.)?(\d{3}( |-|\.)?\d{4})"
                placeholder="number"
                title="The phone number must be 11-12 digits long and can contain numbers, spaces, dashes, pot-bellied brackets and can start with +"
                onChange={this.handleChange}
                required
              />
            </label>
            {editedContact ? (
              <MyButton title={'Edit'} />
            ) : (
              <MyButton title={'Add contact'} />
            )}
          </div>
        </form>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  contacts: contactsSelectors.contactsArray(state),
});

const mapDispatchToProps = {
  onSubmit: contact => contactsOperations.addContact(contact),
  onEdit: contact => contactsOperations.changeContact(contact),
  closeModal,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);

ContactForm.propTypes = {
  name: PropTypes.string,
  number: PropTypes.number,
  onSubmit: PropTypes.func,
};
