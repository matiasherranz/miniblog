import React, { ReactElement, FC, useState } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import PostDetail from '../components/PostDetail';
import Header from '../components/Header';
import LeftDrawer from '../components/LeftDrawer';
import useStyles from '../styles/appStyles';

const Index: FC = (): ReactElement => {
  const classes = useStyles();
  const [open: boolean, setDrawerOpen] = useState(true);

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
