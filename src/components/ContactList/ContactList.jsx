import React from 'react';
import PropTypes from 'prop-types';
import {
  Card,
  CardMedia,
  CardContent,
  CssBaseline,
  Button,
  Grid,
  Container,
  Typography,
  CardActions,
} from '@material-ui/core';

import useStyles from '../../styles';

import TransitionsModal from '../Modal/Modal';

const ContactList = ({ contacts, onDelete, avatar }) => {
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
                  <Button
                    onClick={() => onDelete(el.id)}
                    size="small"
                    color="primary"
                    variant="contained"
                  >
                    Delete
                  </Button>
                  {/* <Button
                    // onClick={handleOpen}
                    size="small"
                    color="primary"
                    variant="contained"
                  >
                    Edit
                  </Button> */}
                  <TransitionsModal id={el.id} />
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
