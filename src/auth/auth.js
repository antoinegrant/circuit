import User from './User';

const firebase = window.firebase;
const provider = new firebase.auth.GoogleAuthProvider()
provider.addScope('https://www.googleapis.com/auth/plus.login')

const getAdminStatus = (user) => {
  if (!user) throw new Error('A user object is required')
  return firebase
    .database()
    .ref('/admins')
    .once('value')
    .then(admins => {
      let val = admins.val() || {}
      return {...user, isAdmin: !!val[user.uid]}
    })
}

let userObj = null
let auth = {

  isAuthenticated: false,
  isAdmin: false,

  set user(user) {
    console.log(user);
    if (!user) {
      userObj = null
      this.isAuthenticated = false
      this.isAdmin = false
      return
    }
    userObj = new User(user)
    this.isAuthenticated = true
    this.isAdmin = user.isAdmin
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
          if (user) {
            resolve(user)
          } else {
            reject()
          }
        })
    })
    .then(getAdminStatus)
    .then(user => this.user = user)
  },

  signIn(cb) {
    return firebase
      .auth()
      .signInWithPopup(provider)
      .then(result => result.user)
      .then(getAdminStatus)
      .then(user => this.user = user)
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