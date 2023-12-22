import React from 'react';
import styles from './DestinationList.module.css';

const DestinationList = ({ destinations }) => {
  return (
    <div className={styles.destinationList}>
      {destinations.map((destination) => (
        <div key={destination.id}>
          <h2>{destination.name}</h2>
          <p>Rating: {destination.rating}</p>
          <p>Reviews: {destination.reviews}</p>
        </div>
      ))}
    </div>
  );
};

export default DestinationList;
