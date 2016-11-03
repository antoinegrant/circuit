const gymsList = (state = {loaded: false, data: []}, action) => {
  switch (action.type) {
    case 'GET_GYM_LIST':
      return {
        loaded: true,
        data: action.data
      }
    default:
      return state
  }
}

export default gymsList