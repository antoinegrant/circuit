const circuitList = (state = {loaded: false, data: []}, action) => {
  switch (action.type) {
    case 'GET_CIRCUIT_LIST':
      return {
        loaded: true,
        data: action.data
      }
    default:
      return state
  }
}

export default circuitList
