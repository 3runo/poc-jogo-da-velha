import { ACTIONS } from '../actions'

const INITIAL_STATE = {
  boardPositions: {
    1: null,
    2: null,
    3: null,
    4: null,
    5: 'X',
    6: null,
    7: null,
    8: null,
    9: null,
  },
  status: '',
  turn: 'X', // 'X'|'O'
  isGameOver: false
}

export default function gameReducerDefinition (state = INITIAL_STATE, action) {
  switch (action.type) {
    case ACTIONS.WWWWWW:
      return action.payload
    default:
      break
  }

  return state
}
