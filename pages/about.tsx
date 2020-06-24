import React, { ReactElement, FC } from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import ProTip from '../components/ProTip';
import Link from '../components/Link';
import Footer from '../components/Footer';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
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
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          Hi there! 😃
        </Typography>
        <Link href="/">← Return to blog</Link>
        <Typography className={classes.root} color="textSecondary">
          Howdy! I&apos;m Matías, a fullstack software engineer from{' '}
          <a
            href="https://goo.gl/maps/KGJbwMrzSz7mV1T37"
            target="_blank"
            rel="noreferrer"
          >
            Córdoba, Argentina
          </a>
          . Here&apos;s a{' '}
          <a
            href="https://www.linkedin.com/in/matiasherranz"
            target="_blank"
            rel="noreferrer"
          >
            link
          </a>{' '}
          to my profile.
        </Typography>
        <ProTip />
        <Footer />
      </Box>
    </Container>
  );
};

export default About;
