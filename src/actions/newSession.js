const firebase = window.firebase;

export const getNewSession = (userId) => (
  (dispatch) => {
    const id = firebase.database()
      .ref(`/sessions/${userId}`)
      .push({
        createdAt: new Date().toString()
      })
      .key

    return dispatch({
      type: 'NEW_SESSION',
      created: true,
      sessionId: id
    })
  }
)
