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
  }
});
const RestaurantItem = ({ restaurant }) => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography className={classes.title} component='h1'>
          {restaurant.name}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default RestaurantItem;
