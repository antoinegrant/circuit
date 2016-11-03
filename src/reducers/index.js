import { combineReducers } from 'redux'
import gymList from './gymList'
import sessionList from './sessionList'

const circuitApp = combineReducers({
  gymList,
  sessionList
})

export default circuitApp