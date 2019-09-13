import React from 'react';
import RestaurantListItem from './RestaurantListItem';

const RestaurantLists = ({ restaurantLists }) => {
  return (
    <div>
      {restaurantLists.map(list => (
        <RestaurantListItem restaurantList={list} />
      ))}
    </div>
  );
};

export default RestaurantLists;
