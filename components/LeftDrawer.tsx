import { FC, ReactElement } from 'react';
import clsx from 'clsx';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import { ToggleDrawerProps } from '../util/types';
import { mainListItems, secondaryListItems } from './ListItems';
import useStyles from '../styles/appStyles';

const LeftDrawer: FC<ToggleDrawerProps> = ({
  setDrawerOpen,
  open,
}: ToggleDrawerProps): ReactElement => {
  const classes = useStyles();
  const handleDrawerClose = () => {
    setDrawerOpen(false);
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
        <IconButton onClick={handleDrawerClose}>
          <ChevronLeftIcon />
        </IconButton>
      </div>
      <Divider />
      <List>{mainListItems}</List>
      <Divider />
      <List>{secondaryListItems}</List>
    </Drawer>
  );
};

export default LeftDrawer;
