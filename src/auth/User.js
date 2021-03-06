let userData = {}

class User {
  constructor(data) {
    userData = data
  }

  get id() {
    return userData.uid
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

export default User
