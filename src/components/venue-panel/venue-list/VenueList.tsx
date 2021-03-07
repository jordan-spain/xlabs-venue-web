import React from 'react';
import Venue from '../../../api/models/Venue';
import VenueRating from '../venue-rating/VenueRating';

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
              <div className="text-md max-w-prose bg-gray-200 rounded-lg p-5 flex flex-col w-screen">
                <span className="font-bold text-md">{venue.name}</span>
                <span className="text-gray-600 text-md">{venue.excerpt}</span>
                <span className="my-1 border-t-2 border-gray-300" />
                <div className="text-sm my-1 flex flex-col space-y-2">
                  <div>
                    <span className="font-bold text-gray-600">Where:</span> {venue.address}
                  </div>
                  <div>
                    <span className="font-bold text-gray-600">Phone:</span> {venue.phone ?? 'Unknown'}
                  </div>
                  <span className="my-1 border-t-2 border-gray-300" />
                  <div className="grid grid-cols-4 gap-1 my-2">
                    <VenueRating text="BEER" rating={venue.beerRating} />
                    <VenueRating text="AMENITIES" rating={venue.amenitiesRating} />
                    <VenueRating text="ATMOSPHERE" rating={venue.atmosphereRating} />
                    <VenueRating text="VALUE" rating={venue.valueRating} />
                  </div>
                  <span className="my-1 border-t-2 border-gray-300" />
                  <div data-testid="tags" className="space-x-1">
                    {venue.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-sm inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-blue-200 text-blue-700 rounded-md mt-1"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </figcaption>
          </div>
        </figure>
      ))}
    </div>
  );
};

export default VenueList;
