import {SET_LYRICS} from '../constants';

function reducer(prevState = {text: ''}, action) {
  
  let newState = prevState;

  switch(action.type) {
    
    case SET_LYRICS:
      newState.text = action.lyric;
      return newState;
    
    default:
      return prevState;
  }
}

export default reducer;