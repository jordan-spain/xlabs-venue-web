import React from 'react';

interface Props {
  onChange: (value: string) => void;
}

const VenueSearch = ({ onChange }: Props) => {
  return (
    <input
      type="input"
      className="text-center text-4xl border-b-4 border-black focus:outline-none mx-auto my-5"
      name="filter"
      aria-label="Search"
      placeholder="search by venue name"
      onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange(e.target.value)}
    />
  );
};

export default VenueSearch;
