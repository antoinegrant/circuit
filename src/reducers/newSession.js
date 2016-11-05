const newSession = (state, action) => {
  switch (action.type) {
    case 'NEW_SESSION':
      return {
        sessionId: action.sessionId,
        created: action.created
      }
    default:
      return {
        sessionId: null
      }
  }
}

export default newSession
