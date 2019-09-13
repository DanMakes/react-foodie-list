import React, { Fragment } from 'react';
import RestaurantItem from './RestaurantItem';

import { makeStyles } from '@material-ui/core/styles';
import { Container, Typography } from '@material-ui/core/';

const useStyles = makeStyles({
  container: {
    alignContent: 'center'
  }
});

const Restaurants = () => {
  const classes = useStyles();
  const restaurants = [
    { id: 1, name: 'Uncle Maddios', location: 'Atlanta', rating: '95' },
    { id: 2, name: 'Mod Pizza', location: 'Sandy Springs', rating: '93' }
  ];
  const title = 'Best Pizza Restaurants In Atlanta';

  return (
    <Container className={classes.container}>
      <Typography className={classes.title} align='center' component='h1'>
        {title}
      </Typography>
      {restaurants.map(restaurant => (
        <RestaurantItem key={restaurant.id} restaurant={restaurant} />
      ))}
    </Container>
  );
};

export default Restaurants;
