import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Title from './Title';

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles({
  postContext: {
    flex: 1,
  },
});

export default function PostDetail() {
  const classes = useStyles();
  return (
    <React.Fragment>
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
    </React.Fragment>
  );
}
