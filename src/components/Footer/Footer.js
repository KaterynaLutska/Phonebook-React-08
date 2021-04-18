import useStyles from '../../styles';

import { Typography } from '@material-ui/core';

const Footer = () => {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <Typography variant="subtitle1" align="center" color="textSecondary">
        Made by Lu-Production
      </Typography>
    </footer>
  );
};

export default Footer;
