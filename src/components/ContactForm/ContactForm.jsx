import { Component } from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';

import { connect } from 'react-redux';
import { contactsOperations } from '../../redux/phonebook';
import { contactsSelectors } from '../../redux/phonebook';
class ContactForm extends Component {
  state = {
    name: '',
    number: '',
    message: '',
  };

  handleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    const { contacts } = this.props;
    const { name, number, message } = this.state;
    let newContact;
    this.reset();
    if (contacts.find(el => el.name.toLowerCase() === name.toLowerCase())) {
      return alert(`${name} is already in contacts`);
    } else if (contacts.some(el => el.number === number)) {
      return alert(`Number ${number} is already in contacts`);
    } else {
      newContact = {
        name: name,
        number: number,
        message: message,
      };
    }
    return this.props.onSubmit(newContact);
  };

  reset = () => {
    this.setState({ name: '', number: '', message: '' });
  };

  render() {
    const { name, number, message } = this.state;
    return (
      <div className="phonebook">
        <form onSubmit={this.handleSubmit} className="phonebook-form">
          <div className="phonebook-input-fielsds">
            <label htmlFor={this.nameInputId} className="phonebook-label">
              <input
                className="phonebook-input"
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                value={name}
                title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                placeholder="name"
                onChange={this.handleChange}
                required
              />
            </label>
            <label className="phonebook-label">
              <input
                className="phonebook-input"
                type="tel"
                name="number"
                value={number}
                pattern="(\+?( |-|\.)?\d{1,2}( |-|\.)?)?(\(?\d{3}\)?|\d{3})( |-|\.)?(\d{3}( |-|\.)?\d{4})"
                placeholder="number"
                title="Номер телефона должен состоять из 11-12 цифр и может содержать цифры, пробелы, тире, пузатые скобки и может начинаться с +"
                onChange={this.handleChange}
                required
              />
            </label>
          </div>
          <div className="msg">
            <textarea
              placeholder="more information"
              className="textarea"
              name="message"
              value={message}
              onChange={this.handleChange}
            ></textarea>
            <button type="submit" className="btn">
              Add contact
            </button>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  contacts: contactsSelectors.contactsArray(state),
});

const mapDispatchToProps = dispatch => ({
  onSubmit: contact => dispatch(contactsOperations.addContact(contact)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);

ContactForm.propTypes = {
  name: PropTypes.string,
  number: PropTypes.number,
  message: PropTypes.string,
  onSubmit: PropTypes.func,
};
