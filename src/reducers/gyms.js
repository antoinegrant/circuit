const gymsReducer = (state = [], action) => {
  switch (action.type) {
    case 'GET_GYM_LIST':
      return action.gyms
    default:
      return state
  }
}

export default gymsReducer