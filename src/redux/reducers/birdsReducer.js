import data from '../../assets/data/birdsData';
import getRandomInt from '../../utils/helpers/randomizer';

const SHOW_BIRD = 'SHOW_BIRD';
const SHOW_CLICKED_BIRD = 'SHOW_CLICKED_BIRD';

const NUMBER_OF_BIRDS = 6;
const RANDOM_SET_OF_BIRDS = getRandomInt(NUMBER_OF_BIRDS);
const RANDOM_BIRD = getRandomInt(NUMBER_OF_BIRDS);

const BIRD = data[RANDOM_SET_OF_BIRDS];

const initialState = {
  birdName: BIRD[RANDOM_BIRD].name,
  birdImage: BIRD[RANDOM_BIRD].image,
  birdAudio: BIRD[RANDOM_BIRD].audio,

  clickedBirdName: null,
  clickedBirdImage: null,
  clickedBirdAudio: null,
  clickedBirdSpecies: null,
  clickedBirdDescription: null,

  RANDOM_SET_OF_BIRDS,
  RANDOM_BIRD,

  isBirdClicked: false,
  isBirdPredicted: false,
};

const birdsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_BIRD:
      return {
        ...state,
        isBirdPredicted: true,
      };
    case SHOW_CLICKED_BIRD:
      return {
        ...state,
        clickedBirdName: BIRD[action.bird].name,
        clickedBirdImage: BIRD[action.bird].image,
        clickedBirdAudio: BIRD[action.bird].audio,
        clickedBirdSpecies: BIRD[action.bird].species,
        clickedBirdDescription: BIRD[action.bird].description,
        isBirdClicked: true,
      };
    default:
      return state;
  }
};

export const showBird = () => ({ type: SHOW_BIRD });
export const showClickedBird = (bird) => ({
  type: SHOW_CLICKED_BIRD,
  bird: bird,
});

export default birdsReducer;
