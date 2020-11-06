import React, { useState } from 'react';
import { TourModel } from '../../models/tour.model';

interface TourProps {
  tour: TourModel;
  removeTour: Function;
}

const Tour: React.FC<TourProps> = ({
  tour: { id, name, info, image, price },
  removeTour,
}) => {
  const [readMore, setReadMore] = useState<boolean>(false);

  return (
    <article className='single-tour'>
      <img src={image} alt={name} />
      <footer>
        <div className='tour-info'>
          <h4>{name}</h4>
          <h4 className='tour-price'>${price}</h4>
        </div>
        <p>
          {readMore ? info : `${info.substring(0, 200)}...`}
          <button onClick={() => setReadMore(!readMore)}>
            {readMore ? 'show less' : 'show more'}
          </button>
        </p>
        <button className='delete-btn' onClick={() => removeTour(id)}>
          not interested
        </button>
      </footer>
    </article>
  );
};

export default Tour;
