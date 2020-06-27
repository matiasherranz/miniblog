import { FC, ReactElement, MouseEvent } from 'react';
import { useRouter } from 'next/router';
import clsx from 'clsx';
import AppBar from '@material-ui/core/AppBar';
import Badge from '@material-ui/core/Badge';
import Link from '@material-ui/core/Link';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import { ToggleDrawerProps } from '../util/types';
import { makeStyles } from '@material-ui/core/styles';
import { DRAWER_WIDTH } from '../util/constants';

const useStyles = makeStyles((theme) => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: DRAWER_WIDTH,
    width: `calc(100% - ${DRAWER_WIDTH}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
  },
}));

const Header: FC<ToggleDrawerProps> = ({
  setDrawerOpen,
  open,
}: ToggleDrawerProps): ReactElement => {
  const classes = useStyles();
  const router = useRouter();

  const handleAboutPageClick = (e: MouseEvent) => {
    e.preventDefault();
    router.push('/about');
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
          onClick={() => setDrawerOpen(true)}
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
        <IconButton color="inherit">
          <Badge badgeContent="Hi!" color="secondary">
            <PersonOutlineIcon onClick={handleAboutPageClick} />
          </Badge>
        </IconButton>
        <Link href="/about">About the author</Link>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
