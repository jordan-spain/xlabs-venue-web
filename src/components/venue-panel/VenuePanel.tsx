import React, { useState } from 'react';
import Venue from '../../api/models/Venue';
import VenueList from './venue-list/VenueList';
import VenueSearch from './venue-search/VenueSearch';

interface Props {
  venues: Venue[];
}

const VenuePanel = ({ venues }: Props) => {
  const [searchValue, setSearchValue] = useState<string>('');

  return (
    <div className="flex flex-col">
      <VenueSearch onChange={(value) => setSearchValue(value)} />
      <VenueList venues={venues.filter((venue) => venue.name.toUpperCase().includes(searchValue.toUpperCase()))} />
    </div>
  );
};

export default VenuePanel;
