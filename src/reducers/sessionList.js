const sessionList = (state = {loaded: false, data: []}, action) => {
  switch (action.type) {
    case 'GET_SESSION_LIST':
      return {
        loaded: true,
        data: state.data.concat(action.data)
      }
    default:
      return state
  }
}

export default sessionList
