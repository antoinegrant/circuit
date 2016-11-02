const firebase = window.firebase;
const provider = new firebase.auth.GoogleAuthProvider()
provider.addScope('https://www.googleapis.com/auth/plus.login')

let userData = {}
class User {
  constructor(data) {
    console.log(data);
    userData = data
  }

  get name() {
    return userData.displayName
  }
  get email() {
    return userData.email
  }
  get emailVerified() {
    return userData.emailVerified
  }
  get avatar() {
    return userData.photoURL
  }
}

export default {

  isAuthenticated: false,
  user: null,

  authState(cb) {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.isAuthenticated = true
        this.user = new User(user)
      }
      cb(this.user)
    })
  },

  authenticate(cb) {
    return firebase
      .auth()
      .signInWithPopup(provider)
      .then(result => {
        this.token = result.credential.accessToken
        this.user = new User(result.user)
        this.isAuthenticated = true
      })
      .catch(error => {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        console.error(errorCode, errorMessage, email, credential);
      })
  },

  signout() {
    this.isAuthenticated = false
    return firebase.auth().signOut()
  }
}