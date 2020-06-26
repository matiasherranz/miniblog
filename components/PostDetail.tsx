import { FC, ReactElement } from 'react';
import moment from 'moment';
import clsx from 'clsx';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import IconButton from '@material-ui/core/IconButton';
import LinkIcon from '@material-ui/icons/Link';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

import Footer from './Footer';
import top50 from '../util/top.json';
import { getMediaUrl } from '../util/utils';
import { BASE_REDDIT_URL } from '../util/constants';

const useStyles = makeStyles((theme) => ({
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  paperHeight: {
    // height: '600px',
    // width: 'auto',
    margin: 'auto',
  },
}));

const PostDetail: FC = (): ReactElement => {
  const classes = useStyles();
  const fixedHeightPaper = clsx(classes.paper, classes.paperHeight);

  const post: Post = top50.data.children[10].data;
  return (
    <main className={classes.content}>
      <div className={classes.appBarSpacer} />
      <Container maxWidth="lg" className={classes.container}>
        <Grid container spacing={3}>
          {/* Post detail */}

          <Paper className={fixedHeightPaper}>
            <Typography component="h5" variant="h5">
              {post.title}
            </Typography>

            <Typography color="textSecondary">
              {moment.unix(post.created).fromNow()}
            </Typography>

            <CardMedia
              src={getMediaUrl(post)}
              component={post.is_video ? 'video' : 'img'}
              title={post.title}
              controls
              autoPlay
            />
            <div>
              <Typography variant="body2" color="textSecondary" component="p">
                Posted by u/{post.author}
              </Typography>
              <IconButton
                onClick={() =>
                  window.open(`${BASE_REDDIT_URL}${post.permalink}`)
                }
              >
                <LinkIcon />
              </IconButton>
            </div>
          </Paper>
        </Grid>
        <Box pt={4}>
          <Footer />
        </Box>
      </Container>
    </main>
  );
};

export default PostDetail;
