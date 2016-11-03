import React, { Component } from 'react'
import auth from '../../auth'

class Header extends Component {

  handleLogout = () => {
    auth
      .signOut()
      .then(() => this.props.router.transitionTo('/'))
  }

  render() {
    return (
      <div>
        {auth.isAuthenticated ? (
          <div>
            <div>Welcome, {auth.user.name} <img src={auth.user.avatar} width="100" alt="Avatar" /></div>
            <button onClick={this.handleLogout}>Sign out</button>
          </div>
        ) : null }
      </div>
    )
  }
}

export default Header
