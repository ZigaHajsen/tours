import React from 'react';
import { Tour } from '../../models/tour.model';

interface ToursProps {
  tours: Tour[];
}

const Tours: React.FC<ToursProps> = ({ tours }) => {
  return <div>tours component</div>;
};

export default Tours;
