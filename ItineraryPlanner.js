// components/ItineraryPlanner.js
import React, { useState } from 'react';
import ItineraryForm from './ItineraryForm';
import ItineraryList from './ItineraryList';
import styles from './ItineraryPlanner.module.css'; // Import your CSS module

const ItineraryPlanner = () => {
  const [itineraries, setItineraries] = useState([]);
  const [editItinerary, setEditItinerary] = useState(null);

  const handleAddItinerary = (newItinerary) => {
    setItineraries([...itineraries, newItinerary]);
  };

  const handleEditItinerary = (itineraryId) => {
    // Find the itinerary to edit
    const itineraryToEdit = itineraries.find((itinerary) => itinerary.id === itineraryId);
    setEditItinerary(itineraryToEdit);
  };

  const handleSaveEdit = (editedItinerary) => {
    // Save the edited itinerary
    const updatedItineraries = itineraries.map((itinerary) =>
      itinerary.id === editedItinerary.id ? editedItinerary : itinerary
    );
    setItineraries(updatedItineraries);
    setEditItinerary(null); // Reset edit mode
  };

  const handleCancelEdit = () => {
    setEditItinerary(null); // Cancel editing
  };

  const handleDeleteItinerary = (itineraryId) => {
    // Delete the itinerary
    const updatedItineraries = itineraries.filter((itinerary) => itinerary.id !== itineraryId);
    setItineraries(updatedItineraries);
  };

  return (
    <div className={styles.itineraryPlanner}>
      <ItineraryForm onAddItinerary={handleAddItinerary} />
      <ItineraryList
        itineraries={itineraries}
        onEdit={handleEditItinerary}
        onDelete={handleDeleteItinerary}
        editItinerary={editItinerary}
        onSaveEdit={handleSaveEdit}
        onCancelEdit={handleCancelEdit}
      />
    </div>
  );
};

export default ItineraryPlanner;
