import PropTypes from 'prop-types';
import s from './Filter.module.css';

import { connect } from 'react-redux';
import { contactsSelectors } from '../../redux/phonebook';
import { changeFilter } from '../../redux/phonebook';

import { Container, Input, InputAdornment } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

const Filter = ({ filter, changeFilter }) => {
  return (
    <Container maxWidth="sm">
      <div>
        <label>
          <Input
            className={s.filterInput}
            startAdornment={
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            }
            type="text"
            value={filter}
            placeholder="find contacts by name..."
            onChange={changeFilter}
          />
        </label>
      </div>
    </Container>
  );
};

const mapStateToProps = state => ({
  filter: contactsSelectors.getFilter(state),
});

const mapDispatchToProps = dispatch => ({
  changeFilter: e => dispatch(changeFilter(e.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);

Filter.protoType = {
  filter: PropTypes.string,
  changeFilter: PropTypes.func,
};
