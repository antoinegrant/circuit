import React from 'react'
import { Link } from 'react-router'

export default ({ sessions = [{id: 1, name: 'Session #1'}], pathname }) => (
  <div>
    <Link to={`${pathname}/new-session`}>New Session</Link>
    <ul>
      {sessions.map(session =>
        <li key={session.id}><Link to={`${pathname}/${session.id}`}>{session.name}</Link></li>)}
    </ul>
  </div>
)