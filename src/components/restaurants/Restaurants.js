import React, { Fragment } from 'react';
import RestaurantItem from './RestaurantItem';

const Restaurants = () => {
  const restaurants = [
    { id: 1, name: 'Uncle Maddios', location: 'Atlanta', rating: '95' },
    { id: 2, name: 'Mod Pizza', location: 'Sandy Springs', rating: '93' }
  ];

  return (
    <Fragment>
      {restaurants.map(restaurant => (
        <RestaurantItem key={restaurant.id} restaurant={restaurant} />
      ))}
    </Fragment>
  );
};

export default Restaurants;
