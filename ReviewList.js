// components/ReviewList.js
import React from 'react';
import styles from './ReviewList.module.css';

const ReviewList = ({ reviews }) => {
  return (
    <div className={styles.reviewList}>
      <h2>Reviews</h2>
      {reviews.map((review) => (
        <div key={review.id} className={styles.reviewItem}>
          <h3>{review.destinationName}</h3>
          <p>Review: {review.review}</p>
          <p>Rating: {review.rating}</p>
          <p>User: {review.userName}</p>
        </div>
      ))}
    </div>
  );
};

export default ReviewList;
