import { pastryData } from '../../mockData/pastry-data';
import useShuffle from './use-shuffle';

const usePastryArray = () => {
  const shufflePastryArray = useShuffle(pastryData);
  
  return {
    fourPastryData: shufflePastryArray.slice(0, 4),
    threePastryData: shufflePastryArray.slice(0, 3),
    eightPastryData: shufflePastryArray.slice(0, 8),
  };
};

export default usePastryArray;
