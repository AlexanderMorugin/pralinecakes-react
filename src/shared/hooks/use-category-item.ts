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

const useCategoryItem = (array) => {
  const chocolateItem = array.filter(
    (item) => item.name === CATEGORY_CHOCOLATE
  );
  const honeyItem = array.filter((item) => item.name === CATEGORY_HONEY);
  const strudelItem = array.filter((item) => item.name === CATEGORY_STRUDEL);
  const fruitItem = array.filter((item) => item.name === CATEGORY_FRUIT);
  const berryItem = array.filter((item) => item.name === CATEGORY_BERRY);
  const sandItem = array.filter((item) => item.name === CATEGORY_SAND);
  const puffItem = array.filter((item) => item.name === CATEGORY_PUFF);
  const bisquitItem = array.filter((item) => item.name === CATEGORY_BISQUIT);
  const poppyItem = array.filter((item) => item.name === CATEGORY_POPPY);
  const nutItem = array.filter((item) => item.name === CATEGORY_NUT);
  const creamItem = array.filter((item) => item.name === CATEGORY_CREAM);
  const yogurtItem = array.filter((item) => item.name === CATEGORY_YOGURT);
  const sufleItem = array.filter((item) => item.name === CATEGORY_SUFLE);
  const cheeseItem = array.filter((item) => item.name === CATEGORY_CHEESE);
  
  return {
    chocolateItem: chocolateItem,
    honeyItem: honeyItem,
    strudelItem: strudelItem,
    fruitItem: fruitItem,
    berryItem: berryItem,
    sandItem: sandItem,
    puffItem: puffItem,
    bisquitItem: bisquitItem,
    poppyItem: poppyItem,
    nutItem: nutItem,
    creamItem: creamItem,
    yogurtItem: yogurtItem,
    sufleItem: sufleItem,
    cheeseItem: cheeseItem,
  };
};

export default useCategoryItem;
