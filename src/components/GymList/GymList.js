import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'

import auth from '../../auth'
import { getGymList } from '../../actions'

class GymList extends Component {

  componentWillMount() {
    this.props.getGymList && this.props.getGymList()
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
                  <span> | <Link to={`/gym-${gym.id}/add-circuit`}>Add Circuit</Link></span>
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
const mapDispatchToProps = (dispatch) => ({
  getGymList: () => dispatch(getGymList())
})
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GymList)
