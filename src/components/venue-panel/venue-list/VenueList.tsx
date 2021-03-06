import React from 'react';
import Venue from '../../../api/models/Venue';
import StarRatings from 'react-star-ratings';

interface Props {
  venues: Venue[];
}

interface RatingProps {
  text: string;
  rating: number;
}

const Rating = ({ text, rating }: RatingProps) => (
  <div className="flex flex-col">
    {text}
    <StarRatings
      rating={rating}
      isSelectable={false}
      numberOfStars={5}
      isAggregateRating={true}
      starDimension="15px"
      starSpacing="1px"
    />
  </div>
);

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
              <div className="text-md max-w-prose bg-gray-200 rounded-lg p-5 flex flex-col">
                <span className="font-bold text-md">{venue.name}</span>
                <span className="text-gray-600 text-md">{venue.excerpt}</span>
                <span className="my-1 border-t-2 border-gray-300" />
                <div className="text-sm my-1 flex flex-col">
                  <div>
                    <span className="font-bold text-gray-600 my-1">Where:</span> {venue.address}
                  </div>
                  <div>
                    <span className="font-bold text-gray-600 my-1">Phone:</span> {venue.phone ?? 'Unknown'}
                  </div>
                  <span className="my-1 border-t-2 border-gray-300" />
                  <div className="grid grid-cols-4 gap-1">
                    <Rating text="BEER" rating={venue.beerRating} />
                    <Rating text="AMENITIES" rating={venue.amenitiesRating} />
                    <Rating text="ATMOSPHERE" rating={venue.atmosphereRating} />
                    <Rating text="VALUE" rating={venue.valueRating} />
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
