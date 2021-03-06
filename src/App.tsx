import React, { useEffect, useState } from 'react';
import NavBar from './components/nav-bar/NavBar';
import Venue from './api/models/Venue';
import { getAllVenues } from './api/actions/VenueActions';
import Wrap from './components/wrap/Wrap';
import ErrorPanel from './components/error-panel/ErrorPanel';
import VenueList from './components/venue-list/VenueList';

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
    <div className="font-mono">
      <NavBar />
      <Wrap>
        {error && <ErrorPanel title="Failed to retrieve venues." />}
        <VenueList venues={venues} />
      </Wrap>
    </div>
  );
};

export default App;
