import PropTypes from 'prop-types';
import { Button } from '@material-ui/core';

// function App() {
//   return <Button color="primary">Hello World</Button>;
// }

const ContactList = ({ contacts, onDelete }) => {
  return (
    <>
      <ul className="contact-list">
        {contacts.map(el => (
          <li key={el.id} className="contact-item">
            {el.name + ':'}
            <span className="contact-span">{el.number}</span>
            <p className="contact-message">{el.message}</p>
            <Button
              onClick={() => onDelete(el.id)}
              //color="primary"
              variant="contained"
              className="btn"
            >
              Delete
            </Button>
            {/* <button onClick={() => onDelete(el.id)} className="btn">
              Delete
            </button> */}
          </li>
        ))}
      </ul>
    </>
  );
};

export default ContactList;

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.shape),
  onDelete: PropTypes.func,
};
