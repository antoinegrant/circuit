import React, { Component } from 'react'
import { Redirect } from 'react-router'
import auth from '../../auth'

class Login extends Component {

  state = {
    redirectToReferrer: false,
    gettingAuthState: true
  }

  login = () => {
    auth
      .signIn()
      .then(() => this.setState({ redirectToReferrer: true }))
  }

  componentDidMount() {
    this.isComponentMounted = true
    auth
      .state()
      .then(() => {
        if (this.isComponentMounted) {
          this.setState({ redirectToReferrer: true, gettingAuthState: false })
        }
      })
      .catch(() => this.setState({ gettingAuthState: false }))
  }

  componentWillUnmount() {
    this.isComponentMounted = false
  }

  render() {
    const { from } = this.props.location.state || { from: '/' }
    const { redirectToReferrer, gettingAuthState } = this.state

    if (auth.isAuthenticated && redirectToReferrer) {
      return <Redirect to={from} />
    }

    if (gettingAuthState) {
      return <div>Authenticating...</div>
    }

    return (
      <div>
        {from && (
          <p>
            You must log in to view the page at
            <code>{from.pathname}</code>
          </p>
        )}
        <button onClick={this.login}>Log in</button>
      </div>
    )
  }
}

export default Login
