// Create gym
firebase.database()
  .ref('/climbing-gyms/allez-up')
  .update({
    name: 'Allez UP!',
    address: '1555 Rue St-Patrick, Montréal, QC H3K 2B7',
    phone: '(514) 989-9656'
  });

// Get Circuit ID
var circuitId = firebase.database()
  .ref('/climbing-gyms/allez-up/circuits')
  .push()
  .key;

// GEt Level ID
var levelId = firebase.database()
  .ref(`/climbing-gyms/allez-up/circuits/${circuitId}`)
  .push()
  .key;

// Create Climb
var climbId = firebase.database()
  .ref(`/climbing-gyms/allez-up/circuits/${circuitId}/levels/${levelId}/climbs`)
  .push({
    foo: 'bar'
  }).key;

// Get the circuit/levels/climbs
firebase.database()
  .ref('/climbing-gym/allez-up/circuits')
  .once('value')
  .then(function (snapshot) {
    console.log('Get the circuit/levels/climbs', snapshot.val());
  });


var userId = '112';

// Create session
var circuitListId = firebase.database()
  .ref(`/climbing-sessions/${userId}/circuits/${circuitId}`)
  .push({
    "elapsed-time": 0,
    "completed": false
  }).key;

firebase.database()
  .ref(`/climbing-sessions/${userId}/circuits/${circuitId}/${circuitListId}/levels/${levelId}`)
  .update({
    "elapsed-time": 0,
    "completed": false
  });

firebase.database()
  .ref(`/climbing-sessions/${userId}/circuits/${circuitId}/${circuitListId}//levels/${levelId}/climbs/${climbId}`)
  .update({
    "num-of-try": 0,
    "completed": false,
    "passed": false,
    "elapsed-time": 0
  });

firebase.database()
  .ref('/climbing-gyms/allez-up/circuits')
  .once('value')
  .then(function (snapshot) {
    console.log('Get the climbing-session/user/circuit/levels/climbs', snapshot.val());
  });



firebase.database()
  .ref('/climbing-gyms/allez-up/circuits')
  .limitToFirst(1)
  .once('value')
  .then(function (snapshot) {
    console.log(snapshot.val());
  });
