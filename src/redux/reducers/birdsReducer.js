import data from '../../assets/data/birdsData';
import getRandomInt from '../../utils/helpers/randomizer';

const SHOW_BIRD = 'SHOW_BIRD';

const NUMBER_OF_BIRDS = 6;
const RANDOM_SET_OF_BIRDS = getRandomInt(NUMBER_OF_BIRDS);
const RANDOM_BIRD = getRandomInt(NUMBER_OF_BIRDS);

const BIRD = data[RANDOM_SET_OF_BIRDS][RANDOM_BIRD];

const initialState = {
  birdName: BIRD.name,
  birdImage: BIRD.image,
  birdAudio: BIRD.audio,
  birdSpecies: BIRD.species,
  birdDescription: BIRD.description,
  RANDOM_SET_OF_BIRDS,
  RANDOM_BIRD,
  isBirdPredicted: false,
};

const birdsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_BIRD:
      return {
        ...state,
        isBirdPredicted: true,
      };

    default:
      return state;
  }
};

export const updateBird = () => ({ type: SHOW_BIRD });

export default birdsReducer;
