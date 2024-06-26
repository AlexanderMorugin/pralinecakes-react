import useShuffle from './use-shuffle';

const useShuffleArray = (array) => {
  const shuffleArray = useShuffle(array);
  
  return {
    threeItemsData: shuffleArray.slice(0, 3),
    fourItemsData: shuffleArray.slice(0, 4),
    eightItemsData: shuffleArray.slice(0, 8),
  };
};

export default useShuffleArray;
