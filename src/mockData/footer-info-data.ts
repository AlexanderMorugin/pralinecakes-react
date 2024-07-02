import CookerIcon from '../assets/icons/icon-cooker.svg';
import CooperationIcon from '../assets/icons/icon-cooperation.svg';
// import NewsIcon from '../assets/icons/icon-news.svg';
// import ProductIcon from '../assets/icons/icon-product.svg';
// import RecipesIcon from '../assets/icons/icon-recipes.svg';
import DeliveryIcon from '../assets/icons/icon-delivery.svg';
import ContactIcon from '../assets/icons/icon-contact.svg';

import Routes from '../shared/config/routes/routes';
import {
  PAGE_ABOUT_TITLE,
  PAGE_CONTACTS_TITLE,
  PAGE_COOPERATION_TITLE,
  PAGE_DELIVERY_TITLE,
  // PAGE_NEWS_TITLE,
  // PAGE_PRODUCTS_TITLE,
  // PAGE_RECIPES_TITLE,
} from '../shared/constants/constants';

export const footerInfoData = [
  {
    icon: CookerIcon,
    title: PAGE_ABOUT_TITLE,
    route: Routes.ABOUT,
  },
  // {
  //   icon: NewsIcon,
  //   title: PAGE_NEWS_TITLE,
  //   route: Routes.NEWS,
  // },
  // {
  //   icon: ProductIcon,
  //   title: PAGE_PRODUCTS_TITLE,
  //   route: Routes.PRODUCTS,
  // },
  // {
  //   icon: RecipesIcon,
  //   title: PAGE_RECIPES_TITLE,
  //   route: Routes.RECIPES,
  // },
  {
    icon: DeliveryIcon,
    title: PAGE_DELIVERY_TITLE,
    route: Routes.DELIVERY,
  },
  {
    icon: ContactIcon,
    title: PAGE_CONTACTS_TITLE,
    route: Routes.CONTACTS,
  },
  {
    icon: CooperationIcon,
    title: PAGE_COOPERATION_TITLE,
    route: Routes.COOPERATION,
  },
];
