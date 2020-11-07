import React, { useState, useEffect } from 'react';
import { Loading, Tours } from '../../components';
import { TourModel } from '../../models/tour.model';
import { Main, Title, TitleText, Button } from './styles/AppStyle';

const url = 'https://course-api.com/react-tours-project';

const App: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [tours, setTours] = useState<TourModel[]>([]);

  const removeTour = (id: string) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };

  const fetchTours = async () => {
    setLoading(true);

    try {
      const response = await fetch(url);
      const tours = await response.json();
      setLoading(false);
      setTours(tours);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTours();
  }, []);

  if (loading) {
    return (
      <Main>
        <Loading />
      </Main>
    );
  }

  if (tours.length === 0) {
    return (
      <Main>
        <Title>
          <TitleText>no tours left</TitleText>
          <Button onClick={fetchTours}>refresh</Button>
        </Title>
      </Main>
    );
  }

  return (
    <Main>
      <Tours tours={tours} removeTour={removeTour} />
    </Main>
  );
};

export default App;
