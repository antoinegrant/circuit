import React, { Component } from 'react'
import { Redirect } from 'react-router'
import auth from '../../auth'

class Login extends Component {

  state = {
    redirectToReferrer: false
  }

  login = () => {
    auth
      .signIn()
      .then(() => this.setState({ redirectToReferrer: true }))
  }

  componentDidMount() {
    this.isComponentMounted = true
    auth.state(user => {
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

    if (auth.isAuthenticated && redirectToReferrer) {
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
