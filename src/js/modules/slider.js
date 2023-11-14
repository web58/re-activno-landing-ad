import {
  initSlider
} from './utils.js';

import {
  sliderConfig
} from './configs.js';

const initSliders = () => {
  initSlider( '.cases__slider', sliderConfig.cases );
};

export {
  initSliders,
};
