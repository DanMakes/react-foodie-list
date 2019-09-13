import React, { Fragment } from 'react';

import { makeStyles } from '@material-ui/core/styles';

import Restaurants from '../restaurants/Restaurants';
import { Container } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    alignContent: 'center'
  }
}));

const Home = () => {
  const classes = useStyles();
  return (
    <Fragment>
      <Container className={classes.container} maxWidth='md'>
        <Restaurants />
      </Container>
    </Fragment>
  );
};

export default Home;
