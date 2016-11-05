const addCircuit = (state = {loaded: false, data: null}, action) => {
  switch (action.type) {
    case 'ADD_CIRCUIT':
      return {
        created: true,
        data: action.data
      }
    default:
      return state
  }
}

export { addCircuit }
