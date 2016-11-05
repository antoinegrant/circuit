const sessionList = (state = {loaded: false, data: []}, action) => {
  switch (action.type) {
    case 'GET_SESSION_LIST':
      let keys = state.data.map(session => session.id)
      let data = action.data.filter(session => {
        let keep = keys.indexOf(session.id) < 0
        keys.push(session.id)
        return keep
      })
      return {
        loaded: true,
        data: state.data.concat(data)
      }
    default:
      return state
  }
}

export default sessionList
