import CookerIcon from '../assets/icons/icon-cooker.svg';
import CooperationIcon from '../assets/icons/icon-cooperation.svg';
import NewsIcon from '../assets/icons/icon-news.svg';
import ProductIcon from '../assets/icons/icon-product.svg';
import RecipesIcon from '../assets/icons/icon-recipes.svg';
import DeliveryIcon from '../assets/icons/icon-delivery.svg';
import ContactIcon from '../assets/icons/icon-contact.svg';

import Routes from '../shared/config/routes/routes';
import {
  PAGE_TITLE_ABOUT,
  PAGE_TITLE_CONTACTS,
  PAGE_TITLE_COOPERATION,
  PAGE_TITLE_DELIVERY,
  PAGE_TITLE_NEWS,
  PAGE_TITLE_PRODUCTS,
  PAGE_TITLE_RECIPES,
} from '../shared/constants/constants';

export const navBarData = [
  {
    icon: CookerIcon,
    title: PAGE_TITLE_ABOUT,
    route: Routes.ABOUT,
  },
  {
    icon: NewsIcon,
    title: PAGE_TITLE_NEWS,
    route: Routes.NEWS,
  },
  {
    icon: ProductIcon,
    title: PAGE_TITLE_PRODUCTS,
    route: Routes.PRODUCTS,
  },
  {
    icon: RecipesIcon,
    title: PAGE_TITLE_RECIPES,
    route: Routes.RECIPES,
  },
  {
    icon: DeliveryIcon,
    title: PAGE_TITLE_DELIVERY,
    route: Routes.DELIVERY,
  },
  {
    icon: ContactIcon,
    title: PAGE_TITLE_CONTACTS,
    route: Routes.CONTACTS,
  },
  {
    icon: CooperationIcon,
    title: PAGE_TITLE_COOPERATION,
    route: Routes.COOPERATION,
  },
];
