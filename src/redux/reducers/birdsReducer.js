import getRandomInt from '../../utils/helpers/randomizer';
import data from '../../assets/data/birdsData';

const SHOW_BIRD = 'SHOW_BIRD';
const SHOW_CLICKED_BIRD = 'SHOW_CLICKED_BIRD';
const UPDATE_LEVEL = 'UPDATE_LEVEL';
const RESET_LEVEL = 'RESET_LEVEL';
const NUMBER_OF_BIRDS = 6;

const SET_OF_BIRDS = 0;
const RANDOM_BIRD = getRandomInt(NUMBER_OF_BIRDS);

const BIRDS = data[SET_OF_BIRDS][RANDOM_BIRD];

const initialState = {
  birdName: BIRDS.name,
  birdImage: BIRDS.image,
  birdAudio: BIRDS.audio,

  clickedBirdName: null,
  clickedBirdImage: null,
  clickedBirdAudio: null,
  clickedBirdSpecies: null,
  clickedBirdDescription: null,

  SET_OF_BIRDS,
  RANDOM_BIRD,
  NUMBER_OF_BIRDS,

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
      const CLICKED_BIRDS = data[state.SET_OF_BIRDS][action.bird];
      return {
        ...state,
        isBirdClicked: true,
        clickedBirdName: CLICKED_BIRDS.name,
        clickedBirdImage: CLICKED_BIRDS.image,
        clickedBirdAudio: CLICKED_BIRDS.audio,
        clickedBirdSpecies: CLICKED_BIRDS.species,
        clickedBirdDescription: CLICKED_BIRDS.description,
      };
    case UPDATE_LEVEL: {
      const UPDATED_BIRD = getRandomInt(NUMBER_OF_BIRDS);
      const NEXT_LEVEL_BIRDS = data[state.SET_OF_BIRDS + 1][UPDATED_BIRD];

      return {
        ...state,
        isBirdPredicted: false,
        isBirdClicked: false,

        birdName: NEXT_LEVEL_BIRDS.name,
        birdImage: NEXT_LEVEL_BIRDS.image,
        birdAudio: NEXT_LEVEL_BIRDS.audio,

        SET_OF_BIRDS: state.SET_OF_BIRDS + 1,
        RANDOM_BIRD: UPDATED_BIRD,
      };
    }
    case RESET_LEVEL:
      const UPDATED_BIRD = getRandomInt(NUMBER_OF_BIRDS);
      const RESET_LEVEL_BIRDS = data[0][UPDATED_BIRD];

      return {
        ...state,
        isBirdPredicted: false,
        isBirdClicked: false,

        birdName: RESET_LEVEL_BIRDS.name,
        birdImage: RESET_LEVEL_BIRDS.image,
        birdAudio: RESET_LEVEL_BIRDS.audio,

        SET_OF_BIRDS: 0,
        RANDOM_BIRD: UPDATED_BIRD,
      };

    default:
      return state;
  }
};

export const updateLevel = () => ({ type: UPDATE_LEVEL });
export const resetLevel = () => ({ type: RESET_LEVEL });
export const showBird = () => ({ type: SHOW_BIRD });

export const showClickedBird = (bird) => ({
  type: SHOW_CLICKED_BIRD,
  bird: bird,
});

export default birdsReducer;
