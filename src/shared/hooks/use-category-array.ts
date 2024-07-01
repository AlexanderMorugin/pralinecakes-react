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
} from '../constants/constants';
import { CategoryProps } from '../types/types';

const useCategoryArray = (array: CategoryProps[]) => {
  const honeyArray = array.filter((item) =>
    item.category?.includes(CATEGORY_HONEY)
  );
  const chocolateArray = array.filter((item) =>
    item.category?.includes(CATEGORY_CHOCOLATE)
  );
  const strudelArray = array.filter((item) =>
    item.category?.includes(CATEGORY_STRUDEL)
  );
  const fruitArray = array.filter((item) =>
    item.category?.includes(CATEGORY_FRUIT)
  );
  const berryArray = array.filter((item) =>
    item.category?.includes(CATEGORY_BERRY)
  );
  const shortbreadArray = array.filter((item) =>
    item.category?.includes(CATEGORY_SAND)
  );
  const biscuitArray = array.filter((item) =>
    item.category?.includes(CATEGORY_BISQUIT)
  );
  const poppyArray = array.filter((item) =>
    item.category?.includes(CATEGORY_POPPY)
  );
  const nutArray = array.filter((item) =>
    item.category?.includes(CATEGORY_NUT)
  );
  const creamArray = array.filter((item) =>
    item.category?.includes(CATEGORY_CREAM)
  );
  const yogurtArray = array.filter((item) =>
    item.category?.includes(CATEGORY_YOGURT)
  );
  const sufleArray = array.filter((item) =>
    item.category?.includes(CATEGORY_SUFLE)
  );
  const cheeseArray = array.filter((item) =>
    item.category?.includes(CATEGORY_CHEESE)
  );
  const puffArray = array.filter((item) =>
    item.category?.includes(CATEGORY_PUFF)
  );

  return {
    honeyArray,
    chocolateArray,
    strudelArray,
    fruitArray,
    berryArray,
    shortbreadArray,
    biscuitArray,
    poppyArray,
    nutArray,
    creamArray,
    yogurtArray,
    sufleArray,
    cheeseArray,
    puffArray,
  };
};

export default useCategoryArray;
