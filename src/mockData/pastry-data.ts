import KiwiBasketS from '../assets/images/pastry/pastry-kiwi-basket-s.jpeg';
import KiwiBasketM from '../assets/images/pastry/pastry-kiwi-basket-m.jpeg';
import KiwiBasketL from '../assets/images/pastry/pastry-kiwi-basket-l.jpeg';
import StrawberryBasketS from '../assets/images/pastry/pastry-strawberry-basket-s.jpeg';
import StrawberryBasketM from '../assets/images/pastry/pastry-strawberry-basket-m.jpeg';
import StrawberryBasketL from '../assets/images/pastry/pastry-strawberry-basket-l.jpeg';
import CherryBasketS from '../assets/images/pastry/pastry-cherry-basket-s.jpeg';
import CherryBasketM from '../assets/images/pastry/pastry-cherry-basket-m.jpeg';
import CherryBasketL from '../assets/images/pastry/pastry-cherry-basket-l.jpeg';
import RaspberryBasketS from '../assets/images/pastry/pastry-raspberry-basket-s.jpeg';
import RaspberryBasketM from '../assets/images/pastry/pastry-raspberry-basket-m.jpeg';
import RaspberryBasketL from '../assets/images/pastry/pastry-raspberry-basket-l.jpeg';
import WildBerriesBasketS from '../assets/images/pastry/pastry-wild-berry-basket-s.jpeg';
import WildBerriesBasketM from '../assets/images/pastry/pastry-wild-berry-basket-m.jpeg';
import WildBerriesBasketL from '../assets/images/pastry/pastry-wild-berry-basket-l.jpeg';


export const pastryData = [
  {
    id: 0,
    route: 'korzinka_s_kiwi',
    image_small: KiwiBasketS,
    image_normal: KiwiBasketM,
    image_large: KiwiBasketL,
    title: 'Корзиночка с киви',
    description:
      'Песочная корзиночка, покрытая черным шоколадом с заварным кремом и начинкой из киви, персика, клубники',
    ingredients:
      'Мука пшеничная, масло сливочное, сахар, киви, персик консервированный, клубника с/м, крем заварной, сливки 33%, молоко, разрыхлитель',
    protein: 3,
    fat: 9,
    carbohydrates: 27.3,
    calories: 203,
    quantity: 6,
    quantity_b: 10,
    weight: 120,
    weight_b: 180,
    price: 80,
    price_b: 104,
    category: 'pastry',
  },
  {
    id: 1,
    route: 'korzinka_s_klubnikoy',
    image_small: StrawberryBasketS,
    image_normal: StrawberryBasketM,
    image_large: StrawberryBasketL,
    title: 'Корзиночка с клубникой',
    description:
      'Песочная корзиночка, покрытая черным шоколадом в сочетании с заварным кремом и начинкой из клубники',
    ingredients:
      'Мука пшеничная, масло сливочное, сахар, клубника с/м, сливки 33%, разрыхлитель',
    protein: 3.1,
    fat: 8.2,
    carbohydrates: 33.2,
    calories: 292,
    quantity: 6,
    quantity_b: 10,
    weight: 120,
    weight_b: 180,
    price: 80,
    price_b: 104,
    category: 'pastry',
  },
  {
    id: 2,
    route: 'korzinka_s_vishney',
    image_small: CherryBasketS,
    image_normal: CherryBasketM,
    image_large: CherryBasketL,
    title: 'Корзиночка с вишней',
    description:
      'Песочная корзиночка, покрытая черным шоколадом в сочетании с заварным кремом и начинкой из вишни',
    ingredients:
      'Мука пшеничная, масло сливочное, сахар, вишня с/м, крем заварной, сливки 33%, молоко, разрыхлитель',
    protein: 2.7,
    fat: 8.7,
    carbohydrates: 27.5,
    calories: 196,
    quantity: 6,
    quantity_b: 10,
    weight: 120,
    weight_b: 180,
    price: 80,
    price_b: 104,
    category: 'pastry',
  },
  {
    id: 3,
    route: 'korzinka_s_malinoy',
    image_small: RaspberryBasketS,
    image_normal: RaspberryBasketM,
    image_large: RaspberryBasketL,
    title: 'Корзиночка с малиной',
    description:
      'Песочная корзиночка, покрытая черным шоколадом в сочетании с заварным кремом и начинкой из малины',
    ingredients:
      'Мука пшеничная, масло сливочное, сахар, яйцо, крем заварной, сливки 33%, молоко, малина с/м, разрыхлитель',
    protein: 3.1,
    fat: 8.2,
    carbohydrates: 33.2,
    calories: 292,
    quantity: 6,
    quantity_b: 10,
    weight: 120,
    weight_b: 180,
    price: 80,
    price_b: 104,
    category: 'pastry',
  },
  {
    id: 4,
    route: 'tartaletka_s_yagodami',
    image_small: WildBerriesBasketS,
    image_normal: WildBerriesBasketM,
    image_large: WildBerriesBasketL,
    title: 'Тарталетка с лесными ягодами',
    description:
      'Песочное тесто с заварным кремом и свежими ягодами',
    ingredients:
      'Мука пшеничная, масло сливочное, сахар, яйцо, крем заварной, сливки 33%, молоко, голубика, малина, разрыхлитель',
    protein: 3.1,
    fat: 8.2,
    carbohydrates: 33.2,
    calories: 292,
    quantity: 25,
    quantity_b: 25,
    weight: 30,
    weight_b: 45,
    price: 49,
    price_b: 70,
    category: 'pastry',
  },
];
