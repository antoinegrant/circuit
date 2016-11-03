const firebase = window.firebase;

function fetchGymList() {
  return firebase.database()
    .ref('/climbing-gyms')
    .once('value')
    .then((snapshot) => {
      let data = snapshot.val();
      return Object.keys(data)
        .map(key => ({
          id: key,
          ...data[key]
        }))
    })
}

export const getGymList = () => (
  (dispatch) => (
    fetchGymList().then(
      data => dispatch({
        type: 'GET_GYM_LIST',
        data: data
      })
    )
  )
)
