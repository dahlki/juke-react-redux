import {createStore, applyMiddleware, combineReducers} from 'redux';
import createLogger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import playerReducer from './reducer/player-reducer';
import lyricsReducer from './reducer/lyrics-reducer';

const logger = createLogger();

const middleware = applyMiddleware(logger, thunkMiddleware);

const reducer = combineReducers({
  lyrics: lyricsReducer,
  player: playerReducer
});

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), middleware);


export default store;
