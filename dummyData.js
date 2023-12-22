// utils/dummyData.js
export const getDummyReviews = () => {
  return [
    {
      id: 1,
      destinationName: 'Paris, France',
      review: 'A wonderful experience in the City of Light!',
      rating: 5,
      userName: 'Traveler123',
    },
    {
      id: 2,
      destinationName: 'Tokyo, Japan',
      review: 'Amazing food and vibrant culture!',
      rating: 4,
      userName: 'Explorer456',
    },
    {
      id: 3,
      destinationName: 'New York City, USA',
      review: 'The city that never sleeps, a must-visit!',
      rating: 5,
      userName: 'Adventurer789',
    },
    // Add more dummy reviews as needed
  ];
};
// utils/dummyData.js
export const getDummyItineraries = () => {
  // Replace this with your actual logic to fetch itineraries or provide dummy data
  return [
    {
      id: 1,
      name: 'Exploration of Europe',
      date: '2023-05-15',
      destinations: ['Paris, France', 'Rome, Italy', 'Barcelona, Spain'],
    },
    {
      id: 2,
      name: 'Asian Adventure',
      date: '2023-08-20',
      destinations: ['Tokyo, Japan', 'Seoul, South Korea', 'Bangkok, Thailand'],
    },
    // Add more dummy itineraries as needed
  ];
};

// ... (other functions, such as getDummyDestinations and getDummyReviews)
export const getDummyDestinations = () => {
  return [
    { id: 1, name: 'Paris, France' },
    { id: 2, name: 'Tokyo, Japan' },
    { id: 3, name: 'New York City, USA' },
  ];
};