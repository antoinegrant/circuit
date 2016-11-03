const sessionsReducer = (state = [], action) => {
  switch (action.type) {
    case 'GET_SESSION_LIST':
      return state.concat(action.sessions)
    default:
      return state
  }
}

export default sessionsReducer