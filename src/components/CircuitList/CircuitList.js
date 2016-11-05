import React, { Component } from 'react'
import { connect } from 'react-redux'

import { getCircuitList } from '../../actions'

class CircuitList extends Component {

  componentWillMount() {
    this.props.getCircuitList && this.props.getCircuitList(this.props.params.gym_id)
  }

  render() {
    const { data, loaded } = this.props

    return (
      <div>
        {!loaded ? (
          <div>Getting list of circuits...</div>
        ) : (
          <ul>
            <li>Circuit Name: {data.name}</li>
            <li>Created at: {data.createdAt}</li>
          </ul>
        )}
      </div>
    )
  }
}

const mapStateToProps = ({ circuitList }) => ({
  ...circuitList,
  data: circuitList.data
})
const mapDispatchToProps = (dispatch) => ({
  getCircuitList: (gym_id) => dispatch(getCircuitList(gym_id))
})
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CircuitList)
