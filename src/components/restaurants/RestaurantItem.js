import React from 'react';

const RestaurantItem = ({ restaurant }) => {
  return (
    <div>
      <h1>{restaurant.name}</h1>
    </div>
  );
};

export default RestaurantItem;
