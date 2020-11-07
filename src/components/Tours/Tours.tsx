import React from 'react';
import { Tour } from '../../components';
import { TourModel } from '../../models/tour.model';
import { Section, Title, TitleText, Underline, Div } from './styles/ToursStyle';

interface ToursProps {
  tours: TourModel[];
  removeTour: Function;
}

const Tours: React.FC<ToursProps> = ({ tours, removeTour }) => {
  return (
    <Section>
      <Title>
        <TitleText>our tours</TitleText>
        <Underline></Underline>
      </Title>
      <Div>
        {tours.map((tour: TourModel) => {
          return (
            <Tour key={tour.id} tour={tour} removeTour={removeTour}></Tour>
          );
        })}
      </Div>
    </Section>
  );
};

export default Tours;
