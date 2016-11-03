import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'

import auth from '../../auth'
import { getGymList } from '../../actions'

class GymList extends Component {

  componentWillMount() {
    this.props.dispatch(getGymList())
  }

  render() {
    const { data, loaded } = this.props

    return (
      <div>
        {!loaded ? (
          <div>Getting list of gyms...</div>
        ) : (
          <ul>
            {data.map(gym =>
              <li key={gym.id}>
                <Link to={`/gym-${gym.id}`}>{gym.name}</Link>
                {auth.isAdmin ? (
                  <span> | Add circuit</span>
                ) : null}
                <div>{gym.phone}</div>
                <address>{gym.address}</address>
              </li>
            )}
          </ul>
        )}
      </div>
    )
  }
}

const mapStateToProps = ({ gymList }) => ({
  ...gymList,
  data: gymList.data
})
export default connect(
  mapStateToProps
)(GymList)
