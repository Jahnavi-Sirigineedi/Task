// pages/index.js
import React, { useState } from 'react';
import DestinationList from '../components/DestinationList';
import ReviewList from '../components/ReviewList';
import ItineraryPlanner from '../components/ItineraryPlanner';
import ItineraryForm from '../components/ItineraryForm';
import ItineraryList from '../components/ItineraryList';
import { getDummyDestinations, getDummyReviews, getDummyItineraries } from '../utils/dummyData';
const Home = () => {
  const destinations = getDummyDestinations();
  const reviews = getDummyReviews();
  const initialItineraries = getDummyItineraries();

  const [itineraries, setItineraries] = useState(initialItineraries);
  const [editItinerary, setEditItinerary] = useState(null);

  const handleEdit = (itineraryId) => {
    const itineraryToEdit = itineraries.find((itinerary) => itinerary.id === itineraryId);
    setEditItinerary(itineraryToEdit);
  };

  const handleDelete = (itineraryId) => {
    // Assuming you want to delete the itinerary from state
    const updatedItineraries = itineraries.filter((itinerary) => itinerary.id !== itineraryId);
    setItineraries(updatedItineraries);
  };

  const handleSaveEdit = (editedItinerary) => {
    // Update the itinerary in state
    const updatedItineraries = itineraries.map((itinerary) =>
      itinerary.id === editedItinerary.id ? editedItinerary : itinerary
    );
    setItineraries(updatedItineraries);
    setEditItinerary(null); // Close the edit modal
  };

  const handleCancelEdit = () => {
    setEditItinerary(null); // Close the edit modal
  };

  return (
    <div>
      <h1>Destination Explorer</h1>
      {/* ... (Other components) */
      <ReviewList reviews={reviews} />}

      <h1>Existing Itineraries</h1>
      <ItineraryList
        itineraries={itineraries}
        onEdit={handleEdit}
        onDelete={handleDelete}
        editItinerary={editItinerary}
        onSaveEdit={handleSaveEdit}
        onCancelEdit={handleCancelEdit}
      /><h1>Itinerary Planner</h1>
      <ItineraryPlanner />
    </div>
    
  );
};

export default Home;
