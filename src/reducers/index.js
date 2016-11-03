import { combineReducers } from 'redux'
import gyms from './gyms'

const circuitApp = combineReducers({
  gyms
})

export default circuitApp