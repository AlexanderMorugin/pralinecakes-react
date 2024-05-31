import { createBrowserRouter } from 'react-router-dom';

import Routes from '../routes/routes';
import { ProductsPage, DeliveryPage, MainPage, RootPage, AboutPage, RecipesPage, ContactPage } from '../../../pages';

const AppRouter = createBrowserRouter([
  {
    path: Routes.HOME,
    element: <RootPage />,
    // errorElement: <ErrorPage />,
    children: [
      {
        path: '',
        element: <MainPage />,
      },
      {
        path: Routes.ABOUT,
        element: <AboutPage />,
      },
      {
        path: Routes.PRODUCTS,
        element: <ProductsPage />,
      },
      {
        path: Routes.RECIPES,
        element: <RecipesPage />,
      },
      {
        path: Routes.DELIVERY,
        element: <DeliveryPage />,
      },
      {
        path: Routes.CONTACTS,
        element: <ContactPage />,
      },
    ],
  },
]);

export default AppRouter;
