import {
  CATEGORY_BERRY,
  CATEGORY_BISQUIT,
  CATEGORY_CHEESE,
  CATEGORY_CHOCOLATE,
  CATEGORY_CREAM,
  CATEGORY_FRUIT,
  CATEGORY_HONEY,
  CATEGORY_NUT,
  CATEGORY_POPPY,
  CATEGORY_PUFF,
  CATEGORY_SAND,
  CATEGORY_STRUDEL,
  CATEGORY_SUFLE,
  CATEGORY_YOGURT,
  TYPE_BERRY,
  TYPE_BISQUIT,
  TYPE_CHEESE,
  TYPE_CHOCOLATE,
  TYPE_CREAM,
  TYPE_FRUIT,
  TYPE_HONEY,
  TYPE_NUT,
  TYPE_POPPY,
  TYPE_PUFF,
  TYPE_SAND,
  TYPE_STRUDEL,
  TYPE_SUFLE,
  TYPE_YOGURT,
} from '../shared/constants/constants';

// массив категорий с названиями и роутами к ним
export const categoryData = [
  { name: CATEGORY_CHOCOLATE, route: TYPE_CHOCOLATE },
  { name: CATEGORY_HONEY, route: TYPE_HONEY },
  { name: CATEGORY_STRUDEL, route: TYPE_STRUDEL },
  { name: CATEGORY_FRUIT, route: TYPE_FRUIT },
  { name: CATEGORY_BERRY, route: TYPE_BERRY },
  { name: CATEGORY_SAND, route: TYPE_SAND },
  { name: CATEGORY_PUFF, route: TYPE_PUFF },
  { name: CATEGORY_BISQUIT, route: TYPE_BISQUIT },
  { name: CATEGORY_POPPY, route: TYPE_POPPY },
  { name: CATEGORY_NUT, route: TYPE_NUT },
  { name: CATEGORY_CREAM, route: TYPE_CREAM },
  { name: CATEGORY_YOGURT, route: TYPE_YOGURT },
  { name: CATEGORY_SUFLE, route: TYPE_SUFLE },
  { name: CATEGORY_CHEESE, route: TYPE_CHEESE },
];

// категории с названиями и роутами к ним
export const chocolate = { name: CATEGORY_CHOCOLATE, route: TYPE_CHOCOLATE };
export const honey = { name: CATEGORY_HONEY, route: TYPE_HONEY };
export const strudel = { name: CATEGORY_STRUDEL, route: TYPE_STRUDEL };
export const fruit = { name: CATEGORY_FRUIT, route: TYPE_FRUIT };
export const berry = { name: CATEGORY_BERRY, route: TYPE_BERRY };
export const sand = { name: CATEGORY_SAND, route: TYPE_SAND };
export const puff = { name: CATEGORY_PUFF, route: TYPE_PUFF };
export const bisquit = { name: CATEGORY_BISQUIT, route: TYPE_BISQUIT };
export const poppy = { name: CATEGORY_POPPY, route: TYPE_POPPY };
export const nut = { name: CATEGORY_NUT, route: TYPE_NUT };
export const cream = { name: CATEGORY_CREAM, route: TYPE_CREAM };
export const yogurt = { name: CATEGORY_YOGURT, route: TYPE_YOGURT };
export const sufle = { name: CATEGORY_SUFLE, route: TYPE_SUFLE };
export const cheese = { name: CATEGORY_CHEESE, route: TYPE_CHEESE };
