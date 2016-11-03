const gymsReducer = (state = [{id: 2, name: 'POOP'}], action) => {
  switch (action.type) {
    case 'GET_GYM_LIST':
      return action.gyms
    default:
      return state
  }
}

export default gymsReducer