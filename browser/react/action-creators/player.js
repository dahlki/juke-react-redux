import {START_PLAYING, STOP_PLAYING, SET_CURRENT_SONG, SET_LIST, SET_PROGRESS} from '../constants';

export const start = function() {
  return {
    type: START_PLAYING
  };
};

export const stop = function() {
  return {
    type: STOP_PLAYING
  };
};
