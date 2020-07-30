import data from '../../assets/data/birdsData';
import getRandomInt from '../../utils/helpers/randomizer';

const SHOW_BIRD = 'SHOW_BIRD';

const NUMBER_OF_BIRDS = 6;
const RANDOM_SET_OF_BIRDS = getRandomInt(NUMBER_OF_BIRDS);
const RANDOM_BIRD = getRandomInt(NUMBER_OF_BIRDS);

const initialState = {
  birdImage:
    'https://cdn.wallpaperhi.com/1280x1024/20120224/black%20white%20birds%20silhouette%201280x1024%20wallpaper_www.wallpaperhi.com_10.jpg',
  birdName: '******',
  birdAudio: data[RANDOM_SET_OF_BIRDS][RANDOM_BIRD].audio,
  RANDOM_SET_OF_BIRDS,
  RANDOM_BIRD,
};

const birdReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_BIRD:
      return {
        ...state,
        birdName: data[RANDOM_SET_OF_BIRDS][RANDOM_BIRD].name,
        birdImage: data[RANDOM_SET_OF_BIRDS][RANDOM_BIRD].image,
      };
    default:
      return state;
  }
};

export const updateBird = () => ({ type: SHOW_BIRD });

export default birdReducer;
