import React from 'react';
import { Tour } from '../../components';
import { TourModel } from '../../models/tour.model';

interface ToursProps {
  tours: TourModel[];
  removeTour: Function;
}

const Tours: React.FC<ToursProps> = ({ tours, removeTour }) => {
  return (
    <section>
      <div className='title'>
        <h2>our tours</h2>
        <div className='underline'></div>
      </div>
      <div>
        {tours.map((tour: TourModel) => {
          return (
            <Tour key={tour.id} tour={tour} removeTour={removeTour}></Tour>
          );
        })}
      </div>
    </section>
  );
};

export default Tours;
