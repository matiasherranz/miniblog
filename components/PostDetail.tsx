import { FC, ReactElement, MouseEvent } from 'react';
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
import useStyles from '../styles/appStyles';
import Footer from './Footer';

import top50 from '../util/top.json';
import { getMediaUrl } from '../util/utils';
import { BASE_REDDIT_URL } from '../util/constants';

const preventDefault = (event: MouseEvent) => {
  event.preventDefault();
};

const PostDetail: FC = (): ReactElement => {
  const classes = useStyles();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  const post: Post = top50.data.children[0].data;
  return (
    <main className={classes.content}>
      <div className={classes.appBarSpacer} />
      <Container maxWidth="lg" className={classes.container}>
        <Grid container spacing={3}>
          {/* Post detail */}
          <Grid item xs={12} md={12} lg={12}>
            <Paper className={fixedHeightPaper}>
              <Typography component="p" variant="h4">
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
        </Grid>
        <Box pt={4}>
          <Footer />
        </Box>
      </Container>
    </main>
  );
};

export default PostDetail;
