import { combineReducers } from 'redux'
import gyms from './gyms'
import sessions from './sessions'

const circuitApp = combineReducers({
  gyms,
  sessions
})

export default circuitApp