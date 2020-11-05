import React from 'react';
import { TourModel } from '../../models/tour.model';

interface TourProps {
  tour: TourModel;
}

const Tour: React.FC<TourProps> = ({
  tour: { id, name, info, image, price },
}) => {
  return (
    <article className='single-tour'>
      <img src={image} alt={name} />
      <footer>
        <div className='tour-info'>
          <h4>{name}</h4>
          <h4 className='tour-price'>${price}</h4>
        </div>
        <p>{info}</p>
        <button className='delete-btn'>not interested</button>
      </footer>
    </article>
  );
};

export default Tour;
