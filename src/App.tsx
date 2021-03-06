import React, { useEffect, useState } from 'react';
import NavBar from './components/nav-bar/NavBar';
import Venue from './api/models/Venue';
import { getAllVenues } from './api/actions/VenueActions';
import Wrap from './components/wrap/Wrap';

const App = () => {
  const [venues, setVenues] = useState<Venue[]>();
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    setError(false);

    async function loadVenues() {
      var response = await getAllVenues();
      if (response.errors) {
        setError(true);
      } else {
        setVenues(response.data?.venues ?? []);
      }
    }

    loadVenues();
  }, [setVenues, setError]);

  return (
    <div>
      <NavBar />
      <Wrap>{error && <div>Oops, something's gone wrong. Please try again.</div>}</Wrap>
    </div>
  );
};

export default App;
