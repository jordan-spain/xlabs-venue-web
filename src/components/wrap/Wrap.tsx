import React, { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const Wrap = ({ children }: Props) => <div className="max-w-7xl mx-auto my-auto px-4">{children}</div>;

export default Wrap;
