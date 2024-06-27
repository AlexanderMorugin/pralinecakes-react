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
  PastryPage,
  CategoriesPage,
  CategoryPage,
} from '../../../pages';
import { cakesData } from '../../../mockData/cakes-data';
import { pastryData } from '../../../mockData/pastry-data';

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
        path: Routes.ONE_CAKE,
        element: <CakePage data={cakesData} />,
      },
      {
        path: Routes.ONE_PASTRY,
        element: <PastryPage data={pastryData} />,
      },
      {
        path: Routes.CATEGORIES,
        element: <CategoriesPage />,
      },
      {
        path: Routes.ONE_CATEGORY,
        element: <CategoryPage />,
      },
    ],
  },
]);

export default AppRouter;
