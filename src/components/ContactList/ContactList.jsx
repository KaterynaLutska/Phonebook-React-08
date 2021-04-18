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
import img from '../../images/face.png';
import { connect } from 'react-redux';

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
                  <Button
                    onClick={() => alert('Coming soon')}
                    size="small"
                    color="primary"
                    variant="contained"
                  >
                    Edit
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};

const mapStateToProps = () => ({
  avatar: img,
});

export default connect(mapStateToProps)(ContactList);

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.shape),
  onDelete: PropTypes.func,
};
