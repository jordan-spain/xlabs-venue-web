import React from 'react';

interface Props {
  title: string;
}

const ErrorPanel = ({ title }: Props) => {
  return (
    <div
      data-testid="error"
      className="bg-red-100 border-t-4 border-red-400 rounded-b px-4 py-3 shadow-md max-w-md mx-auto my-10 px-4"
      role="alert"
    >
      <div className="flex flex-col space-y-1">
        <p className="font-bold">{title}</p>
        <p className="text-sm">Oops, something's gone wrong. Please try again.</p>
      </div>
    </div>
  );
};

export default ErrorPanel;
