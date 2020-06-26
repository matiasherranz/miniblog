import React, { FC, ReactElement } from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import MuiLink from '@material-ui/core/Link';

const useStyles = makeStyles(() =>
  createStyles({
    footerMargin: {
      marginBottom: '50px',
    },
  })
);

const Footer: FC = (): ReactElement => {
  const classes = useStyles();
  return (
    <Typography
      className={classes.footerMargin}
      variant="body2"
      color="textSecondary"
      align="center"
    >
      {'Made by '}
      <MuiLink color="inherit" href="https://linkedin.com/in/matiasherranz">
        Matías Herranz
      </MuiLink>
      {' using NextJS, Typescript and MaterialUI'}
      {'. | '}
      {new Date().getFullYear()}
    </Typography>
  );
};

export default Footer;
