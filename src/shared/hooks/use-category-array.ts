const useCategoryArray = (array) => {
  const honeyArray = array.filter((item) => item.category.includes('медовое'));
  const chocolateArray = array.filter((item) =>
    item.category.includes('шоколадное')
  );
  const strudelArray = array.filter((item) =>
    item.category.includes('штрудель')
  );
  const fruitArray = array.filter((item) =>
    item.category.includes('фруктовое')
  );
  const berryArray = array.filter((item) => item.category.includes('ягодное'));
  const shortbreadArray = array.filter((item) =>
    item.category.includes('песочное')
  );
  const biscuitArray = array.filter((item) =>
    item.category.includes('бисквитное')
  );
  const poppyArray = array.filter((item) => item.category.includes('маковое'));
  const nutArray = array.filter((item) => item.category.includes('ореховое'));
  const creamArray = array.filter((item) => item.category.includes('кремовое'));
  const yogurtArray = array.filter((item) =>
    item.category.includes('йогуртовое')
  );
  const sufleArray = array.filter((item) => item.category.includes('суфле'));
  const cheeseArray = array.filter((item) => item.category.includes('сырное'));
  const puffArray = array.filter((item) => item.category.includes('слоенное'));

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
