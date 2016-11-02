import React from 'react'
import { Link } from 'react-router'

export default ({ circuits = [{id: 1, name: 'Blue'}, {id: 2, name: 'Black'}], pathname }) => (
  <ul>
    {circuits.map(circuit =>
      <li key={circuit.id}><Link to={`${pathname}/${circuit.id}`}>{circuit.name}</Link></li>)}
  </ul>
)