import React from 'react';
import Venue from '../../api/models/Venue';

interface Props {
  venues: Venue[];
}

const VenueList = ({ venues }: Props) => {
  return (
    <div className="flex flex-col">
      {venues.map((venue) => (
        <figure key={venue.id} data-testid={`venue-id-${venue.id}`} className="flex space-x-2">
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
  );
};

export default VenueList;
