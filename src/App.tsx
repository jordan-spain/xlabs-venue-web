import React, { useEffect, useState } from 'react';
import NavBar from './components/nav-bar/NavBar';
import Venue from './api/models/Venue';
import { getAllVenues } from './api/actions/VenueActions';
import Wrap from './components/wrap/Wrap';
import ErrorPanel from './components/error-panel/ErrorPanel';

const App = () => {
  const [venues, setVenues] = useState<Venue[]>([]);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    setError(false);

    async function loadVenues() {
      var response = await getAllVenues();
      if (response.errors) {
        setError(true);
      } else {
        setVenues(response.data ?? []);
      }
    }

    loadVenues();
  }, [setVenues, setError]);

  return (
    <div>
      <NavBar />
      <Wrap>
        {error && <ErrorPanel title="Failed to retrieve venues." />}
        <div className="flex flex-col">
          {venues.map((venue) => (
            <figure data-testid={`venue-id-${venue.id}`} className="flex space-x-2">
              <img
                className="ml-5 object-contain w-48 h-48"
                data-testid="venue-thumbnail"
                src={venue.img}
                alt={venue?.name ?? 'Venue image'}
              />
              <div className="flex flex-col my-5">
                <figcaption className="flex flex-col">
                  <span>{venue.name}</span>
                  <span>{venue.excerpt}</span>
                </figcaption>
                <span>Where: {venue.address}</span>
                <span>Phone: {venue.phone ?? 'Unknown'}</span>
              </div>
            </figure>
          ))}
        </div>
      </Wrap>
    </div>
  );
};

export default App;
