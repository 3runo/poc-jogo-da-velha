import { ACTIONS } from '../actions'

const INITIAL_STATE = []

export default function usersReducerDefinition (state = INITIAL_STATE, action) {
  switch (action.type) {
    case ACTIONS.AAA:
      return action.payload
    default:
      break
  }

  return state
}
