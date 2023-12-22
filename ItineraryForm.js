// components/ItineraryList.js
import React, { useState } from 'react';
import styles from './ItineraryList.module.css';

const ItineraryList = ({ itineraries }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredItineraries = itineraries.filter((itinerary) =>
    itinerary.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleEdit = (itineraryId) => {
    // Logic for editing the itinerary
    console.log('Edit Itinerary with ID:', itineraryId);
  };

  const handleDelete = (itineraryId) => {
    // Logic for deleting the itinerary
    console.log('Delete Itinerary with ID:', itineraryId);
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
      {filteredItineraries.map((itinerary) => (
        <div key={itinerary.id}>
          <h2>{itinerary.name}</h2>
          <p>Reviews: {itinerary.reviews}</p>
          <p>Rating: {itinerary.rating}</p>
          <button onClick={() => handleEdit(itinerary.id)}>Edit</button>
          <button onClick={() => handleDelete(itinerary.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

// export default ItineraryList;
const ItineraryForm = ({ onAddItinerary }) => {
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [selectedDestinations, setSelectedDestinations] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  // Dummy data for destinations (replace with your actual data)
  const dummyDestinations = [
    { id: 1, name: 'Paris, France' },
    { id: 2, name: 'Tokyo, Japan' },
    { id: 3, name: 'New York City, USA' },
  ];

  const handleAddDestination = (destination) => {
    setSelectedDestinations([...selectedDestinations, destination]);
  };

  const handleRemoveDestination = (destination) => {
    setSelectedDestinations(selectedDestinations.filter((d) => d.id !== destination.id));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create the new itinerary object
    const newItinerary = {
      name,
      date,
      destinations: selectedDestinations.map((destination) => destination.name),
    };

    // Call the parent component's function to add the itinerary
    onAddItinerary(newItinerary);

    // Reset form fields
    setName('');
    setDate('');
    setSelectedDestinations([]);
    setSearchTerm('');
  };

  return (
    <div className={styles.itineraryForm}>
      <h2>Create New Itinerary</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        </label>
        <label>
          Date:
          <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
        </label>
        <label>
          Destinations:
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search destinations..."
          />
          <ul>
            {dummyDestinations
              .filter((destination) =>
                destination.name.toLowerCase().includes(searchTerm.toLowerCase())
              )
              .map((destination) => (
                <li key={destination.id}>
                  {destination.name}
                  <button
                    type="button"
                    onClick={() =>
                      selectedDestinations.includes(destination)
                        ? handleRemoveDestination(destination)
                        : handleAddDestination(destination)
                    }
                  >
                    {selectedDestinations.includes(destination) ? 'Remove' : 'Add'}
                  </button>
                </li>
              ))}
          </ul>
        </label>
        <button type="submit">Create Itinerary</button>
      </form>
    </div>
  );
};

export default ItineraryForm;
