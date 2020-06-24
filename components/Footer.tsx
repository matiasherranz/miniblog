import React from 'react';
import Typography from '@material-ui/core/Typography';
import MuiLink from '@material-ui/core/Link';

export default function Footer() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Made by '}
      <MuiLink color="inherit" href="https://linkedin.com/in/matiasherranz">
        Matías Herranz
      </MuiLink>{' using NextJS, Typescript and MaterialUI'}
      {'. | '}
      {new Date().getFullYear()}
    </Typography>
  );
}
