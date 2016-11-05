import { combineReducers } from 'redux'
import { addCircuit } from './admin';
import gymList from './gymList'
import circuitList from './circuitList'
import sessionList from './sessionList'
import newSession from './newSession'

const circuitApp = combineReducers({
  gymList,
  circuitList,
  sessionList,
  newSession,
  addCircuit
})

export default circuitApp