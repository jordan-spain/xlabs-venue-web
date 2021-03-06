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
  const [searchValue, setSearchValue] = useState<string>('');

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
        {venues.length > 0 && (
          <div className="flex flex-col">
            <input
              type="input"
              className="text-center text-4xl border-b-4 border-black focus:outline-none mx-auto my-5"
              name="filter"
              aria-label="Search"
              placeholder="search by venue name"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchValue(e.target.value)}
            />
            <VenueList
              venues={venues.filter((venue) => venue.name.toUpperCase().includes(searchValue.toUpperCase()))}
            />
          </div>
        )}
      </Wrap>
    </div>
  );
};

export default App;
