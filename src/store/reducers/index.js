import { combineReducers } from 'redux';
import GameReducer from './game-reducer'
import ScoreReducer from './score-reducer'

// Setting global state
const combinedReducers = combineReducers({
	game: GameReducer,
	score: ScoreReducer
})

export default combinedReducers;
