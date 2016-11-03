import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'

import { getSessionList } from '../../actions'
import auth from '../../auth'

class SessionList extends Component {

  componentWillMount() {
    this.props.dispatch(getSessionList(auth.user.uid))
  }

  render() {
    const { sessions, pathname } = this.props

    return (
      <div>
        <Link to={`${pathname}/new-session`}>New Session</Link>
        <ul>
          {sessions.map(session =>
            <li key={session.id}><Link to={`${pathname}/${session.id}`}>{session.name}</Link></li>)}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = ({ sessions }) => ({ sessions })
export default connect(
  mapStateToProps
)(SessionList)
