const firebase = window.firebase;

export const addCircuit = (payload) => (
  (dispatch) => {

    const { gym_id, name } = payload

    // Create Circuit
    const circuitId = firebase.database()
      .ref(`/circuits`)
      .push({
        gym_id: gym_id,
        name: name
      })
      .key
    const circuit = {
      id: circuitId,
      name: name || `Circuit-${circuitId}`
    }
    firebase.database()
      .ref(`/climbing-gyms/${gym_id}/circuits/${circuitId}`)
      .update({ref: `/circuits/${circuitId}`})

    // Create levels and climbs
    firebase.database()
      .ref(`/circuits/${circuitId}`)
      .update({
        createdAt: new Date().toString(),
        levels: Object.keys(payload)
                  .filter(key => /^level-[0-9]$/.test(key))
                  .map(level => ({
                    name: payload[level],
                    climbs: [1,2,3,4,5]
                  }))
      })

      dispatch({
        type: 'ADD_CIRCUIT',
        data: circuit
      })
  }
)
