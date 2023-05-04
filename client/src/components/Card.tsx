import React from 'react';

interface CardProps {}

export const Card: React.FC<CardProps> = () => {
  return (
    <div className='card new-card'>
      <h5>List Test Info</h5>
      <ul>
        <li>
          Lorem ipsum dolor sit amet consectetur adipiscing, elit ante senectus
          sociis.
        </li>
        <li>
          Lorem ipsum dolor sit amet consectetur adipiscing, elit ante senectus
          sociis.
        </li>
      </ul>
    </div>
  );
};
