import { FC, ReactElement } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import clsx from 'clsx';
import InfiniteScroll from 'react-infinite-scroller';

import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import AutorenewIcon from '@material-ui/icons/Autorenew';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import CircularProgress from '@material-ui/core/CircularProgress';
import ClearAllIcon from '@material-ui/icons/ClearAll';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';

import { ToggleDrawerProps } from '../util/types';
import ListItems from './ListItems';
import { DRAWER_WIDTH } from '../util/constants';
import {
  toggleAllPosts,
  selectPosts,
  selectIsLoading,
} from '../lib/slices/redditSlice';
import { fetchRedditPosts } from '../lib/reddit';

const useStyles = makeStyles((theme) => ({
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: DRAWER_WIDTH,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
}));

const LeftDrawer: FC<ToggleDrawerProps> = ({
  setDrawerOpen,
  open,
}: ToggleDrawerProps): ReactElement => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { hasMore } = useSelector(selectPosts);
  const isLoading = useSelector(selectIsLoading);

  const handleDismissAll = () => {
    setDrawerOpen(false);
    dispatch(toggleAllPosts());
  };

  return (
    <Drawer
      variant="permanent"
      classes={{
        paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
      }}
      open={open}
    >
      <div className={classes.toolbarIcon}>
        <IconButton onClick={() => setDrawerOpen(false)}>
          <ChevronLeftIcon />
        </IconButton>
      </div>
      <Divider />

      <InfiniteScroll
        loadMore={() => dispatch(fetchRedditPosts())}
        hasMore={hasMore}
        initialLoad={false}
        loader={
          <Box p={1} textAlign="center" hidden={!isLoading} key={0}>
            <CircularProgress />
          </Box>
        }
        useWindow={false}
      >
        <ListItems />
      </InfiniteScroll>
      <Box position="fixed" bottom="0" width={'100%'} zIndex="modal">
        <Button
          variant="contained"
          color={hasMore ? 'secondary' : 'primary'}
          size="large"
          startIcon={hasMore ? <ClearAllIcon /> : <AutorenewIcon />}
          onClick={() => handleDismissAll()}
          fullWidth
        >
          {hasMore ? 'Dismiss All' : 'Un-Dismiss!'}
        </Button>
      </Box>
    </Drawer>
  );
};

export default LeftDrawer;
