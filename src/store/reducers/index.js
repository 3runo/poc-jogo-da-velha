import { combineReducers } from 'redux';
import UsersReducer from './user-reducer'

// Setting global state
const rootReducer = combineReducers({
	user: UsersReducer
})

export default rootReducer;
