import React, { Component } from 'react'
import { Redirect } from 'react-router'
import Auth from '../../Auth'

class Login extends Component {

  state = {
    redirectToReferrer: false
  }

  login = () => {
    Auth.authenticate()
      .then(() => this.setState({ redirectToReferrer: true }))
  }

  componentDidMount() {
    this.isComponentMounted = true
    Auth.authState(user => {
      if (user && this.isComponentMounted) {
        this.setState({ redirectToReferrer: true })
      }
    })
  }

  componentWillUnmount() {
    this.isComponentMounted = false
  }

  render() {
    const { from } = this.props.location.state || { from: '/' }
    const { redirectToReferrer } = this.state

    if (Auth.isAuthenticated && redirectToReferrer) {
      return <Redirect to={from} />
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
