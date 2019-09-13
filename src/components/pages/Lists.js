import React, { Fragment } from 'react';

import { makeStyles } from '@material-ui/core/styles';

import RestaurantLists from '../restaurantLists/RestaurantLists';
import { Container } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    alignContent: 'center'
  }
}));

const restaurantLists = [
  {
    title: 'Best Pizza Restaurants In Atlanta',
    restaurants: [
      { id: 1, name: 'Uncle Maddios', location: 'Atlanta', rating: '95' },
      { id: 2, name: 'Mod Pizza', location: 'Sandy Springs', rating: '93' }
    ]
  },
  {
    title: 'Best Burger Restaurants In Atlanta',
    restaurants: [
      { id: 1, name: 'Farm Burger', location: 'Dunwoody', rating: '95' },
      { id: 2, name: 'Moxie Burger', location: 'Marietta', rating: '93' }
    ]
  }
];

const Lists = () => {
  const classes = useStyles();
  return (
    <Fragment>
      <Container className={classes.container} maxWidth='md'>
        <RestaurantLists restaurantLists={restaurantLists} />
      </Container>
    </Fragment>
  );
};

export default Lists;
