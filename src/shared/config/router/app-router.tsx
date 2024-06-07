import { createBrowserRouter } from 'react-router-dom';

import Routes from '../routes/routes';
import {
  ProductsPage,
  DeliveryPage,
  MainPage,
  RootPage,
  AboutPage,
  RecipesPage,
  ContactPage,
  CooperationPage,
  NewsPage,
  AllPastryPage,
  AllCakesPage,
  CakePage,
} from '../../../pages';
import { cakesData } from '../../../mockData/cakes-data';

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
        path: Routes.CAKES,
        element: <AllCakesPage />,
      },
      {
        path: Routes.PASTRY,
        element: <AllPastryPage />,
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
      {
        path: Routes.COOPERATION,
        element: <CooperationPage />,
      },
      {
        path: Routes.NEWS,
        element: <NewsPage />,
      },
      {
        path: Routes.CAKE,
        element: <CakePage data={cakesData} />,
      },
    ],
  },
]);

export default AppRouter;
