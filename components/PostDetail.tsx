import { FC, ReactElement, MouseEvent } from 'react';
import clsx from 'clsx';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import useStyles from '../styles/appStyles';
import Footer from './Footer';
import Title from './Title';

const preventDefault = (event: MouseEvent) => {
  event.preventDefault();
};

const PostDetail: FC = (): ReactElement => {
  const classes = useStyles();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  return (
    <main className={classes.content}>
      <div className={classes.appBarSpacer} />
      <Container maxWidth="lg" className={classes.container}>
        <Grid container spacing={3}>
          {/* Post detail */}
          <Grid item xs={12} md={12} lg={12}>
            <Paper className={fixedHeightPaper}>
              <Title>POST TITLE</Title>
              <Typography component="p" variant="h4">
                SOMETHING RELEVANT
              </Typography>
              <Typography color="textSecondary" className={classes.postContext}>
                on 15 March, 2019
              </Typography>
              <div>
                <Link color="primary" href="#" onClick={preventDefault}>
                  View in Reddit!
                </Link>
              </div>
            </Paper>
          </Grid>
        </Grid>
        <Box pt={4}>
          <Footer />
        </Box>
      </Container>
    </main>
  );
};

export default PostDetail;
