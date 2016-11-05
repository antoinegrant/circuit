const firebase = window.firebase;

function fetchSessionList(userId) {
  return firebase.database()
    .ref(`/sessions/${userId}`)
    .once('value')
    .then((snapshot) => {
      const data = snapshot.val()
      return Object.keys(data)
        .map(key => {
          let session = data[key]
          return {
            id: key,
            createdAt: session.createdAt
          }
        })
    })
}

export const getSessionList = (userId) => (
  (dispatch) => (
    fetchSessionList(userId).then(
      data => dispatch({
        type: 'GET_SESSION_LIST',
        data: data
      })
    )
  )
)
