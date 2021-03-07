import React, { useEffect, useState } from 'react';
import NavBar from './components/nav-bar/NavBar';
import Venue from './api/models/Venue';
import { getAllVenues } from './api/actions/VenueActions';
import Wrap from './components/wrap/Wrap';
import ErrorPanel from './components/error-panel/ErrorPanel';
import VenuePanel from './components/venue-panel/VenuePanel';

const App = () => {
  const [venues, setVenues] = useState<Venue[]>([]);
  const [error, setError] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setError(false);
    setLoading(true);

    async function loadVenues() {
      var response = await getAllVenues();
      if (response.errors) {
        setError(true);
      } else {
        setVenues(response.data ?? []);
      }
      setLoading(false);
    }

    loadVenues();
  }, [setVenues, setError]);

  return (
    <div className="font-mono">
      <NavBar />
      <Wrap>
        {loading ? (
          <div className="flex flex-center">
            <strong className="animate-pulse mt-5 text-center text-4xl w-screen">loading, please wait...</strong>
          </div>
        ) : (
          <>
            {error && <ErrorPanel title="Failed to retrieve venues." />}
            {venues.length > 0 && <VenuePanel venues={venues} />}
          </>
        )}
      </Wrap>
    </div>
  );
};

export default App;
