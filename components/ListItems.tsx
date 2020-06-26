import { FunctionComponent, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Avatar from '@material-ui/core/Avatar';
import Badge from '@material-ui/core/Badge';
import DoneAllIcon from '@material-ui/icons/DoneAll';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Link from '@material-ui/core/Link';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import Slide from '@material-ui/core/Slide';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';

import {
  selectPosts,
  setCurrentPost,
  dismissPost,
} from '../lib/slices/redditSlice';
import { fetchRedditPosts } from '../lib/reddit';
import { BASE_REDDIT_URL } from '../util/constants';
import { validateUrl } from '../util/utils';
import { Post } from '../util/types';

const ListItems: FunctionComponent = () => {
  const dispatch = useDispatch();
  const {
    posts,
    currentPost,
    readPostIds,
    dismissedPostIds,
    hasMore,
  } = useSelector(selectPosts);

  const handleSelectPost = (post: Post) => {
    dispatch(setCurrentPost(post));
  };

  useEffect(() => {
    // Select first post by default
    if (!currentPost && posts.length && hasMore) {
      dispatch(setCurrentPost(posts[0]));
    }
  }, [posts, hasMore]);

  useEffect(() => {
    // Request more posts if the user dismissed them all
    if (Object.keys(dismissedPostIds).length === posts.length) {
      dispatch(fetchRedditPosts());
    }
  }, [dismissedPostIds, posts]);

  return (
    <List disablePadding>
      {posts.map((post) => (
        <Slide
          direction="right"
          in={!dismissedPostIds[post.id]}
          mountOnEnter
          unmountOnExit
          timeout={200}
          key={post.id}
        >
          <div>
            <ListItem
              button
              alignItems="flex-start"
              onClick={() => handleSelectPost(post)}
            >
              <ListItemAvatar>
                <Badge
                  color="primary"
                  badgeContent="New"
                  invisible={readPostIds[post.id]}
                >
                  <Avatar
                    alt={post.title}
                    src={validateUrl(post.thumbnail)}
                    variant="rounded"
                  />
                </Badge>
              </ListItemAvatar>
              <ListItemText
                disableTypography
                primary={
                  <Typography
                    variant="subtitle1"
                    component="h2"
                    color="textPrimary"
                  >
                    {post.title}
                  </Typography>
                }
                secondary={
                  <>
                    <Typography
                      component="div"
                      variant="body2"
                      color="textPrimary"
                    >
                      <Link
                        href={`${BASE_REDDIT_URL}/u/${post.author}`}
                        onClick={(event: React.SyntheticEvent) =>
                          event.stopPropagation()
                        }
                        target="_blank"
                        rel="noopener"
                      >
                        u/{post.author}
                      </Link>
                    </Typography>

                    {/* Comments count */}
                    <Typography
                      component="div"
                      variant="caption"
                      color="textSecondary"
                    >
                      {post.num_comments} comments
                    </Typography>
                  </>
                }
              />
              <ListItemSecondaryAction>
                <Tooltip title="Dismiss Post">
                  <IconButton
                    color="secondary"
                    size="small"
                    onClick={() => dispatch(dismissPost(post.id))}
                  >
                    <DoneAllIcon />
                  </IconButton>
                </Tooltip>
              </ListItemSecondaryAction>
            </ListItem>
            <Divider component="li" />
          </div>
        </Slide>
      ))}
    </List>
  );
};

export default ListItems;
