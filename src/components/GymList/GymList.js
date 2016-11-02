import React from 'react'
import { Link } from 'react-router'

export default ({ gyms = [{id: 1, name: 'Allez UP'}] }) => (
  <ul>
    {gyms.map(gym =>
      <li key={gym.id}><Link to={`/gym-${gym.id}`}>{gym.name}</Link></li>)}
  </ul>
)