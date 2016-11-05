import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router'

import { getNewSession } from '../../actions'
import auth from '../../auth'

class NewSession extends Component {

  componentWillMount() {
    this.props.getNewSession && this.props.getNewSession(auth.user.id)
  }

  render() {
    const { sessionId, created, params } = this.props
    console.log(this.props);

    if (created) {
      return <Redirect to={`/gym-${params.gym_id}/${sessionId}`} />
    }
    return null
  }
}

const mapStateToProps = ({ newSession }) => {
  console.log(newSession);
  return newSession
}
const mapDispatchToProps = (dispatch) => ({
  getNewSession: (userId) => dispatch(getNewSession(userId))
})
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewSession)
