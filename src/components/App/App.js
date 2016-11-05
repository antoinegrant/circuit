import React from 'react'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import Match from 'react-router/Match'
import Redirect from 'react-router/Redirect'
import Router from 'react-router/BrowserRouter'

import auth from '../../auth'
import circuitReducers from '../../reducers'
let store = createStore(
  circuitReducers,
  applyMiddleware(thunk)
)

import { AddCircuit, AddLevel } from '../Admin'
import Login from '../Login'
import Header from '../Header'
import GymList from '../GymList'
import SessionList from '../SessionList'
import CircuitList from '../CircuitList'
import NewSession from '../NewSession'
// import ClimbList from '../ClimbList'
// import Climb from '../Climb'

import styles from './App.css'

const MatchWhenAuthorized = ({ component: Component, ...rest }) => (
  <Match {...rest} render={props => (
    auth.isAuthenticated ? (
      <Component {...props} />
    ) : (
      <Redirect to={{
        pathname: '/login',
        state: { from: props.location }
      }} />
    )
  )} />
)
const MatchWhenAdmin = ({ component: Component, ...rest }) => (
  <Match {...rest} render={props => (
    auth.isAdmin ? (
      <Component {...props} />
    ) : (
      <Redirect to='/' />
    )
  )} />
)

const App = () => (
  <Provider store={store}>
    <Router>
      {({ router }) => (
        <div className={ styles.App }>
          <Header router={router} />
          <Match exactly pattern="/login" component={Login} />

          <MatchWhenAuthorized exactly pattern="/" component={GymList} />
          <MatchWhenAuthorized exactly pattern="/gym-:gym_id" component={SessionList} />
          <MatchWhenAuthorized exactly pattern="/gym-:gym_id/new-session" component={NewSession} />
          <MatchWhenAuthorized exactly pattern="/gym-:gym_id/:session_id" component={CircuitList} />

          <MatchWhenAdmin exactly pattern="/admin/gym-:gym_id/add-circuit" component={AddCircuit} />
          <MatchWhenAdmin exactly pattern="/admin/gym-:gym_id/:circuit-id/add-level" component={AddLevel} />
        </div>
      )}
    </Router>
  </Provider>
)

// const App = () => (
//     <BrowserRouter>
//       <div className={ styles.App }>
//         <ul>
//           <li><Link to="/">Home</Link></li>
//         </ul>
//         <Match exactly pattern="/login" component={Login} />
//         <Match exactly pattern="/" component={GymList} />
//         <Match exactly pattern="/:gym_id" component={SessionList} />
//         <Match exactly pattern="/:gym_id/new-session" component={NewSession} />
//         <Match exactly pattern="/:gym_id/:session_id" component={CircuitList} />
//         <Match exactly pattern="/:gym_id/:session_id/:circuit_id" component={ClimbList} />
//         <Match exactly pattern="/:gym_id/:session_id/:circuit_id/:climb_id" component={Climb} />
//       </div>
//     </BrowserRouter>
// )

export default App
