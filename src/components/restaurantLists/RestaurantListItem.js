import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { Card, CardContent, Typography } from '@material-ui/core/';

const useStyles = makeStyles({
  card: {
    maxWidth: 800,
    margin: 10
  },
  title: {
    fontSize: 14
  },
  location: {
    fontSize: 12
  },
  rating: {
    fontSize: 12
  }
});

const RestaurantListItem = ({ restaurantList }) => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography component='h1'>{restaurantList.title}</Typography>
      </CardContent>
    </Card>
  );
};

export default RestaurantListItem;
