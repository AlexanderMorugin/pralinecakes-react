import { cakesData } from '../../mockData/cakes-data';
import useShuffle from './use-shuffle';

const useCakeArray = () => {
  const shuffleCakeArray = useShuffle(cakesData);
  
  return {
    fourCakeData: shuffleCakeArray.slice(0, 4),
    threeCakeData: shuffleCakeArray.slice(0, 3),
    eightCakeData: shuffleCakeArray.slice(0, 8),
  };
};

export default useCakeArray;
