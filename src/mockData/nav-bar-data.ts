import CookerIcon from '../assets/icons/icon-cooker.svg';
import ProductIcon from '../assets/icons/icon-product.svg';
import RecipesIcon from '../assets/icons/icon-recipes.svg';
import DeliveryIcon from '../assets/icons/icon-delivery.svg';
import ContactIcon from '../assets/icons/icon-contact.svg';

import Routes from '../shared/config/routes/routes';

export const navBarData = [
  {
    icon: CookerIcon,
    title: 'О нас',
    route: Routes.ABOUT,
  },
  {
    icon: ProductIcon,
    title: 'Продукция',
    route: Routes.PRODUCTS,
  },
  {
    icon: RecipesIcon,
    title: 'Рецепты',
    route: Routes.RECIPES,
  },
  {
    icon: DeliveryIcon,
    title: 'Доставка',
    route: Routes.DELIVERY,
  },
  {
    icon: ContactIcon,
    title: 'Контакты',
    route: Routes.CONTACTS,
  },
];
