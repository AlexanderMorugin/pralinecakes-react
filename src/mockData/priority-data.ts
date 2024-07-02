import cakeDeliveryIcon from '../assets/icons/icon-cake-delivery.svg';
import happyCookerIcon from '../assets/icons/icon-happy-cooker.svg';
// import berryIcon from '../assets/icons/icon-berry.svg';
import cakeIcon from '../assets/icons/icon-cake.svg';
import cafeIcon from '../assets/icons/icon-cafe.svg';
import Routes from '../shared/config/routes/routes';

export const priorityData = [
  {
    title: 'Бережная доставка',
    image: cakeDeliveryIcon,
    route: Routes.DELIVERY,
  },
  {
    title: 'Опытные кондитеры',
    image: happyCookerIcon,
    route: Routes.ABOUT,
  },
  // {
  //   title: 'Натуральные ингредиенты',
  //   image: berryIcon,
  //   route: Routes.ABOUT, // роута пока нет
  // },
  {
    title: 'Широкий ассортимент',
    image: cakeIcon,
    route: Routes.PRODUCTS,
  },
  {
    title: 'Совместное процветание',
    image: cafeIcon,
    route: Routes.ABOUT, // роута пока нет
  },
  // {
  //   title: 'Гарантия качества',
  //   image: cafeIcon,
  //   route: Routes.ABOUT, // роута пока нет
  // },
];
