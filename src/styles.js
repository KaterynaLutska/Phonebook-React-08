import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  AuthTitle: {
    marginTop: '20px',
  },
  ContactList: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  cardCrid: {
    paddingTop: '20px 0',
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%',
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    borderTop: '1px solid #45A3',
    //backgroundColor: theme.palette.background.paper,
    padding: '40px 0',
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default useStyles;
