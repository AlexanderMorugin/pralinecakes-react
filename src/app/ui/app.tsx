import { FC } from 'react';
import { RouterProvider } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

import AppRouter from '../../shared/config/router/app-router';

const App: FC = () => {
  const helmetContext = {};

  return (
    <HelmetProvider context={helmetContext}>
      <RouterProvider router={AppRouter} />
    </HelmetProvider>
  );
};

export default App;
