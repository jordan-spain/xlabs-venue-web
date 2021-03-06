import React from 'react';
import Venue from '../../../api/models/Venue';

interface Props {
  venues: Venue[];
}

const VenueList = ({ venues }: Props) => {
  return (
    <div className="flex flex-col space-y-3 my-2 mx-auto">
      {venues.map((venue) => (
        <figure
          key={venue.id}
          data-testid={`venue-id-${venue.id}`}
          className="flex space-x-2 bg-gray-100 rounded-xl shadow-md"
        >
          <img
            className="ml-5 object-contain w-48 h-48 my-auto"
            data-testid="venue-thumbnail"
            src={venue.img}
            alt={venue.name}
          />
          <div className="flex flex-col my-5 pt-6 p-8 text-left">
            <figcaption data-testid="details" className="flex flex-col text-lg">
              <p className="text-md max-w-prose bg-gray-200 rounded-lg p-5 flex flex-col">
                <span className="font-bold text-md">{venue.name}</span>
                <span className="text-gray-600 text-md">{venue.excerpt}</span>
                <span className="my-1 border-t-2 border-gray-300" />
                <span className="text-sm my-1 flex flex-col">
                  <span className="text-gray-600 my-1">
                    <span className="font-bold">Where:</span> {venue.address}
                  </span>
                  <span className="text-gray-600 my-1">
                    <span className="font-bold">Phone:</span> {venue.phone ?? 'Unknown'}
                  </span>
                </span>
              </p>
            </figcaption>
          </div>
        </figure>
      ))}
    </div>
  );
};

export default VenueList;
