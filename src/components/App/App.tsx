import React, { useState, useEffect } from 'react';
import { Loading, Tours } from '../../components';
import { TourModel } from '../../models/tour.model';

const url = 'https://course-api.com/react-tours-project';

const App: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [tours, setTours] = useState<TourModel[]>([]);

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
      <main>
        <Loading />
      </main>
    );
  }
  return (
    <main>
      <Tours tours={tours} />
    </main>
  );
};

export default App;
