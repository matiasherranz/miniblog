import { FC, ReactElement, useState } from 'react';
import clsx from 'clsx';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { ToggleDrawerProps } from '../util/types';
import useStyles from '../styles/appStyles';

const Header: FC<ToggleDrawerProps> = ({
  setDrawerOpen,
  open,
}: ToggleDrawerProps): ReactElement => {
  const classes = useStyles();
  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };

  return (
    <AppBar
      position="absolute"
      className={clsx(classes.appBar, open && classes.appBarShift)}
    >
      <Toolbar className={classes.toolbar}>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
        >
          <MenuIcon />
        </IconButton>
        <Typography
          component="h1"
          variant="h6"
          color="inherit"
          noWrap
          className={classes.title}
        >
          Some reddit!
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
