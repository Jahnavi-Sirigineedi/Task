// components/ItineraryList.js
import React, { useState } from 'react';
import styles from './ItineraryList.module.css';

const ItineraryList = ({ itineraries, onEdit, onDelete, editItinerary, onSaveEdit, onCancelEdit }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredItineraries = itineraries.filter((itinerary) =>
    itinerary.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleEditClick = (itineraryId) => {
    onEdit(itineraryId);
  };

  const handleDeleteClick = (itineraryId) => {
    onDelete(itineraryId);
  };

  const handleSaveEdit = () => {
    onSaveEdit(editItinerary);
  };

  const handleCancelEdit = () => {
    onCancelEdit();
  };

  return (
    <div className={styles.itineraryList}>
      <h2>Existing Itineraries</h2>
      <input
        type="text"
        placeholder="Search itineraries..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className={styles.itineraryItems}>
        {filteredItineraries.map((itinerary) => (
          <div key={itinerary.id} className={styles.itineraryItem}>
            <h3>{itinerary.name}</h3>
            <p>Reviews: {itinerary.reviews}</p>
            <p>Rating: {itinerary.rating}</p>
            <button onClick={() => handleEditClick(itinerary.id)}>Edit</button>
            <button onClick={() => handleDeleteClick(itinerary.id)}>Delete</button>
          </div>
        ))}
      </div>

      {editItinerary && (
        <div className={styles.editModal}>
          {/* Display the modal for editing */}
          <h2>Edit Itinerary</h2>
          {/* Add your form elements for editing the itinerary */}
          <button onClick={handleSaveEdit}>Save</button>
          <button onClick={handleCancelEdit}>Cancel</button>
        </div>
      )}
    </div>
  );
};

export default ItineraryList;
