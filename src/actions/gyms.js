const firebase = window.firebase;

function fetchGymList() {
  return firebase.database()
    .ref('/climbing-gyms')
    .once('value')
    .then((snapshot) => {
      let gyms = snapshot.val();
      return Object.keys(gyms)
        .map(key => ({
          id: key,
          ...gyms[key]
        }))
    })
}

export const getGymList = () => (
  (dispatch) => (
    fetchGymList().then(
      gymList => dispatch({
        type: 'GET_GYM_LIST',
        gyms: gymList
      })
    )
  )
)
