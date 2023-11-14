import {
  iosVhFix,
} from './modules/utils.js';

import {
  validateForms,
} from './modules/validate.js';

import {
  initModals,
} from './modules/modal.js';

import {
  initHeaderSettings,
} from './modules/header.js';

import {
  initSliders,
} from './modules/slider.js';

import {
  initScrollTop,
} from './modules/scroll.js';

import {
  initYTubeVideo,
} from './modules/yt-video.js';

import {
  initIncludesTabs,
} from './modules/tabs.js';

document.addEventListener( 'DOMContentLoaded', () => {
  iosVhFix();

  window.addEventListener( 'load', () => {
    validateForms();
    initModals();
    initSliders();
    initScrollTop();
    initHeaderSettings();
    initYTubeVideo();
    initIncludesTabs();
  } );
} );
