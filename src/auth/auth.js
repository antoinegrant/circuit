import User from './User';

const firebase = window.firebase;
const provider = new firebase.auth.GoogleAuthProvider()
provider.addScope('https://www.googleapis.com/auth/plus.login')

let userObj = null
let auth = {

  isAuthenticated: false,
  isAdmin: false,

  set user(user) {
    if (!user) {
      userObj = null
      this.isAuthenticated = false
      this.isAdmin = false
      return
    }
    userObj = new User(user)
    this.isAuthenticated = true
    this.isAdmin = true
    return this.user
  },

  get user() {
    return userObj
  },

  state(cb) {
    return new Promise((resolve, reject) => {
      firebase
        .auth()
        .onAuthStateChanged(user => {
          this.user = user
          if (user) {
            resolve(this.user)
          } else {
            reject()
          }
        })
    })
  },

  signIn(cb) {
    return firebase
      .auth()
      .signInWithPopup(provider)
      .then(result => this.user = result.user)
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

  signOut() {
    return firebase
      .auth()
      .signOut()
      .then(() => this.user = null)
  }
}

export default auth