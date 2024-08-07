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
  CategoryPage,
  AllCategoriesPage,
  NotFoundPage,
} from '../../../pages';

const AppRouter = createBrowserRouter([
  {
    path: Routes.HOME,
    element: <RootPage />,
    errorElement: <NotFoundPage />,
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
        element: <CakePage />,
      },
      {
        path: Routes.ONE_PASTRY,
        element: <PastryPage />,
      },
      {
        path: Routes.CATEGORIES,
        element: <AllCategoriesPage />,
      },
      {
        path: Routes.ONE_CATEGORY,
        element: <CategoryPage />,
      },
    ],
  },
]);

export default AppRouter;
