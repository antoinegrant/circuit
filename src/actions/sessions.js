const firebase = window.firebase;

function fetchSessionList(userId) {
  return firebase.database()
    .ref(`/climbing-sessions/${userId}`)
    .once('value')
    .then((snapshot) => [{
      id: 'foo',
      name: 'fooName',
      completed: false,
      timestamp: 1478189541
    }])
}

export const getSessionList = (userId) => (
  (dispatch) => (
    fetchSessionList(userId).then(
      sessionList => dispatch({
        type: 'GET_SESSION_LIST',
        sessions: sessionList
      })
    )
  )
)
