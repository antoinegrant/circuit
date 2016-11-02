import React, { Component } from 'react'
import Auth from '../../Auth'

class Header extends Component {

  handleLogout = () => {
    Auth.signout()
      .then(() => this.props.router.transitionTo('/'))
  }

  render() {
    return (
      <div>
        {Auth.isAuthenticated ? (
          <div>
            <div>Welcome, {Auth.user.name} <img src={Auth.user.avatar} width="100" alt="Avatar" /></div>
            <button onClick={this.handleLogout}>Sign out</button>
          </div>
        ) : null }
      </div>
    )
  }
}

export default Header
