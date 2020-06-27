import React, { ReactElement, FC } from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import ProTip from '../components/ProTip';
import Link from '@material-ui/core/Link';
import { CssBaseline } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    aboutText: {
      margin: theme.spacing(6, 0, 3),
      fontSize: '1.2rem',
      lineHeight: 1.5,
    },
  })
);

const About: FC = (): ReactElement => {
  const classes = useStyles();
  return (
    <Container maxWidth="sm">
      <CssBaseline />
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          Hi there! 😃
        </Typography>
        <Link href="/">← Return to blog</Link>
        <Typography
          variant="h6"
          color="textSecondary"
          className={classes.aboutText}
        >
          Howdy! I&apos;m Matías, a fullstack software engineer from{' '}
          <Link
            href="https://goo.gl/maps/KGJbwMrzSz7mV1T37"
            target="_blank"
            rel="noreferrer"
          >
            Córdoba, Argentina
          </Link>
          . Here&apos;s a{' '}
          <Link
            href="https://www.linkedin.com/in/matiasherranz"
            target="_blank"
            rel="noreferrer"
          >
            link
          </Link>{' '}
          to my profile.
        </Typography>
        <ProTip />
      </Box>
    </Container>
  );
};

export default About;
