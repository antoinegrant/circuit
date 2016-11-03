import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'

import { getGymList } from '../../actions'

class GymList extends Component {

  componentWillMount() {
    this.props.dispatch(getGymList())
  }

  render() {
    const { gyms } = this.props

    return (
      <div>
        <ul>
          {gyms.map(gym =>
            <li key={gym.id}>
              <Link to={`/gym-${gym.id}`}>{gym.name}</Link>
              <div>{gym.phone}</div>
              <address>{gym.address}</address>
            </li>
          )}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = ({ gyms }) => ({ gyms })
export default connect(
  mapStateToProps
)(GymList)
