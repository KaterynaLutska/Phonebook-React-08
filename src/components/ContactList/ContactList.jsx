import React from 'react';
import PropTypes from 'prop-types';
import {
  Card,
  CardMedia,
  CardContent,
  CssBaseline,
  Grid,
  Container,
  Typography,
  CardActions,
} from '@material-ui/core';

import useStyles from '../../styles';
import MyButton from '../Button';

const ContactList = ({
  contacts,
  onDelete,
  avatar,
  openModal,
  editContact,
}) => {
  const classes = useStyles();

  return (
    <>
      <CssBaseline />
      <Container maxWidth="md" className={classes.cardCrid}>
        <Grid container spacing={4}>
          {contacts.map(el => (
            <Grid key={el.id} item xs={12} sm={6}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image={avatar}
                  title="imgTitle"
                />
                <CardContent className={classes.cardContent}>
                  <Typography variant="h5"> {el.name + ':'} </Typography>
                  <Typography variant="h5">{el.number}</Typography>
                  <Typography variant="h4">{el.message}</Typography>
                </CardContent>
                <CardActions>
                  <MyButton title={'Delete'} onClick={() => onDelete(el.id)} />

                  <MyButton
                    title={'Edit'}
                    onClick={() => {
                      editContact(el);
                      openModal();
                    }}
                  />
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default ContactList;

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.shape),
  onDelete: PropTypes.func,
};
