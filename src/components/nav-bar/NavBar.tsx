import React from 'react';
import Wrap from '../wrap/Wrap';

const NavBar = () => {
  return (
    <nav data-testid="navbar" className="bg-gray-800">
      <Wrap>
        <div className="flex items-center h-16">
          <a className="font-mono text-white text-xl hover:underline" href="/">
            venue
          </a>
        </div>
      </Wrap>
    </nav>
  );
};

export default NavBar;
