import data from '../../assets/data/birdsData';
import getRandomInt from '../../utils/helpers/randomizer';

const NUMBER_OF_BIRDS = 6;

export default (
  RANDOM_SET_OF_BIRDS = 0,
  RANDOM_BIRD = getRandomInt(NUMBER_OF_BIRDS)
) => {
  return data[RANDOM_SET_OF_BIRDS][RANDOM_BIRD];
};
