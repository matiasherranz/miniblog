import React, { ReactElement, FC, useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import CssBaseline from '@material-ui/core/CssBaseline';
import LeftDrawer from '../components/LeftDrawer';
import { makeStyles } from '@material-ui/core/styles';

import PostDetail from '../components/PostDetail';
import Header from '../components/Header';
import { fetchRedditPosts } from '../lib/reddit';

const useStyles = makeStyles({
  root: {
    display: 'flex',
  },
});

const Index: FC = (): ReactElement => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [open, setDrawerOpen] = useState(false);

  useEffect(() => {
    async function dispatchFetchPosts() {
      await dispatch(fetchRedditPosts());
    }
    dispatchFetchPosts();
  }, [dispatch]);

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Header open={open} setDrawerOpen={setDrawerOpen} />
      <LeftDrawer open={open} setDrawerOpen={setDrawerOpen} />
      <PostDetail />
    </div>
  );
};

export default Index;
