- *Description:*
  The Home component serves as the main page of the Destination Explorer application, providing an overview of destinations, reviews, existing itineraries, and the itinerary planner.

- *Usage:*
  Displays a cohesive view of various components to provide a comprehensive user experience.

- *Components Used:*
  - DestinationList: Renders a list of destinations.
  - ReviewList: Displays a list of reviews.
  - ItineraryPlanner: Allows users to plan new itineraries.
  - ItineraryForm: A form for adding new itineraries.
  - ItineraryList: Lists existing itineraries.

- *State:*
  - itineraries: Maintains an array of existing itineraries.
  - editItinerary: Represents the currently edited itinerary (null if not editing).

- *Functions:*
  - handleEdit(itineraryId): Sets the currently edited itinerary.
  - handleDelete(itineraryId): Deletes an itinerary.
  - handleSaveEdit(editedItinerary): Saves edits to an existing itinerary.
  - handleCancelEdit(): Cancels the editing process for an itinerary.

jsx
// Example usage in pages/index.js
const Home = () => {
  // ... (other imports and code)

  return (
    <div>
      <h1>Destination Explorer</h1>
      {/* ... (Other components) */}
      <ReviewList reviews={reviews} />

      <h1>Existing Itineraries</h1>
      <ItineraryList
        itineraries={itineraries}
        onEdit={handleEdit}
        onDelete={handleDelete}
        editItinerary={editItinerary}
        onSaveEdit={handleSaveEdit}
        onCancelEdit={handleCancelEdit}
      />
      <h1>Itinerary Planner</h1>
      <ItineraryPlanner />
    </div>
  );
};


### DestinationList Component

- *Description:*
  The DestinationList component displays a list of destinations.

- *Props:*
  - destinations: An array of destination objects.

jsx
// Example usage in components/DestinationList.js
const DestinationList = ({ destinations }) => {
  // ... (component code)
};


### ItineraryForm Component

- *Description:*
  The ItineraryForm component provides a form for adding new itineraries.

- *Props:*
  - onAddItinerary: Function to handle adding a new itinerary.

- *State:*
  - name: Represents the name of the new itinerary.
  - date: Represents the date of the new itinerary.
  - selectedDestinations: Holds an array of selected destinations.
  - searchTerm: Used for filtering destinations.

- *Functions:*
  - handleAddDestination(destination): Adds a destination to the selected list.
  - handleRemoveDestination(destination): Removes a destination from the selected list.
  - handleSubmit(e): Handles the submission of the form.

jsx
// Example usage in components/ItineraryForm.js
const ItineraryForm = ({ onAddItinerary }) => {
  // ... (component code)
};


### ItineraryList Component

- *Description:*
  The ItineraryList component displays a list of existing itineraries.

- *Props:*
  - itineraries: An array of existing itineraries.

- *State:*
  - searchTerm: Used for filtering itineraries.

- *Functions:*
  - handleEdit(itineraryId): Logic for editing an existing itinerary.
  - handleDelete(itineraryId): Logic for deleting an existing itinerary.

jsx
// Example usage in components/ItineraryList.js
const ItineraryList = ({ itineraries }) => {
  // ... (component code)
};


### ReviewList Component

- *Description:*
  The ReviewList component displays a list of reviews.

- *Props:*
  - reviews: An array of review objects.

jsx
// Example usage in components/ReviewList.js
const ReviewList = ({ reviews }) => {
  // ... (component code)
};
