import React from 'react';
import StarRatings from 'react-star-ratings';

interface RatingProps {
  text: string;
  rating: number;
}

const VenueRating = ({ text, rating }: RatingProps) => (
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

export default VenueRating;
