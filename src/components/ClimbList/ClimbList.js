import React from 'react'
import { Link } from 'react-router'

export default ({ climbs = [{id: 1, name: '#1'}, {id: 2, name: '#2'}], pathname }) => (
  <ul>
    {climbs.map(climb =>
      <li key={climb.id}><Link to={`${pathname}/${climb.id}`}>{climb.name}</Link></li>)}
  </ul>
)