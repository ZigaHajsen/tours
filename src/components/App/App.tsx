import React, { useState } from 'react';
import { Loading } from '../../components';

const url = 'https://course-api.com/react-tours-project';

const App: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [tours, setTours] = useState([]);

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }
  return <h2>tours project setup</h2>;
};

export default App;
