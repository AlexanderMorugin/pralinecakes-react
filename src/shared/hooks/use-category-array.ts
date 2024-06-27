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

const useCategoryArray = (array) => {
  const honeyArray = array.filter((item) =>
    item.category.includes(CATEGORY_HONEY)
  );
  const chocolateArray = array.filter((item) =>
    item.category.includes(CATEGORY_CHOCOLATE)
  );
  const strudelArray = array.filter((item) =>
    item.category.includes(CATEGORY_STRUDEL)
  );
  const fruitArray = array.filter((item) =>
    item.category.includes(CATEGORY_FRUIT)
  );
  const berryArray = array.filter((item) =>
    item.category.includes(CATEGORY_BERRY)
  );
  const shortbreadArray = array.filter((item) =>
    item.category.includes(CATEGORY_SAND)
  );
  const biscuitArray = array.filter((item) =>
    item.category.includes(CATEGORY_BISQUIT)
  );
  const poppyArray = array.filter((item) =>
    item.category.includes(CATEGORY_POPPY)
  );
  const nutArray = array.filter((item) => item.category.includes(CATEGORY_NUT));
  const creamArray = array.filter((item) =>
    item.category.includes(CATEGORY_CREAM)
  );
  const yogurtArray = array.filter((item) =>
    item.category.includes(CATEGORY_YOGURT)
  );
  const sufleArray = array.filter((item) =>
    item.category.includes(CATEGORY_SUFLE)
  );
  const cheeseArray = array.filter((item) =>
    item.category.includes(CATEGORY_CHEESE)
  );
  const puffArray = array.filter((item) =>
    item.category.includes(CATEGORY_PUFF)
  );

  return {
    honeyArray: honeyArray,
    chocolateArray: chocolateArray,
    strudelArray: strudelArray,
    fruitArray: fruitArray,
    berryArray: berryArray,
    shortbreadArray: shortbreadArray,
    biscuitArray: biscuitArray,
    poppyArray: poppyArray,
    nutArray: nutArray,
    creamArray: creamArray,
    yogurtArray: yogurtArray,
    sufleArray: sufleArray,
    cheeseArray: cheeseArray,
    puffArray: puffArray,
  };
};

export default useCategoryArray;
