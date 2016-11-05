const firebase = window.firebase;

function fetchCircuitList(gym_id) {
  return firebase.database()
    .ref(`/climbing-gyms/${gym_id}/circuits`)
    .limitToLast(1)
    .once('value')
    .then((snapshot) => {
      if (snapshot.hasChildren()) {
        return firebase.database()
          .ref(`/circuits/${Object.keys(snapshot.val())[0]}`)
          .once('value')
          .then(snapshot => snapshot.val())
      }
    })
}

export const getCircuitList = (gym_id) => (
  (dispatch) => (
    fetchCircuitList(gym_id).then(
      data => dispatch({
        type: 'GET_CIRCUIT_LIST',
        data: data
      })
    )
  )
)
