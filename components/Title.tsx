import React, { FC, ReactElement } from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';

const Title: FC = (props): ReactElement => {
  return (
    <Typography component="h2" variant="h6" color="primary" gutterBottom>
      {props.children}
    </Typography>
  );
};

Title.propTypes = {
  children: PropTypes.node,
};

export default Title;
