import React, { Component } from 'react'
import { connect } from 'react-redux'

import { addCircuit } from '../../actions'

class AddCircuit extends Component {

  handleSubmit = (evt) => {
    evt.preventDefault()
    let payload = { gym_id: this.props.params.gym_id }
    Object.keys(this.refs)
      .forEach(key => payload[key] = this.refs[key].value)
    this.props.addCircuit && this.props.addCircuit(payload)
  }

  render() {
    const { data, created } = this.props

    return (
      <div>
        {created ? (
          <ul>
            <li>ID: { data.id }</li>
            <li>Name: { data.name }</li>
          </ul>
        ) : (
          <form onSubmit={this.handleSubmit}>

            <fieldset>
              <legend>Circuit</legend>
              <label>Name:</label>
              <input type="text" name="name" ref="name" required></input><br />
            </fieldset>

            <fieldset>
              <legend>Levels</legend>
              <label>Level #1:</label>
              <input type="text" name="level-1" ref="level-1" value="Yellow" required></input>
              <label>Number Of Climbs:</label>
              <input type="text" name="level-1-num-climbs" ref="level-1-num-climbs" value="5" required></input><br />
              <label>Level #2:</label>
              <input type="text" name="level-2" ref="level-2" value="Green" required></input>
              <label>Number Of Climbs:</label>
              <input type="text" name="level-2-num-climbs" ref="level-2-num-climbs" value="5" required></input><br />
              <label>Level #3:</label>
              <input type="text" name="level-3" ref="level-3" value="Orange" required></input>
              <label>Number Of Climbs:</label>
              <input type="text" name="level-3-num-climbs" ref="level-3-num-climbs" value="5" required></input><br />
              <label>Level #4:</label>
              <input type="text" name="level-4" ref="level-4" value="Blue" required></input>
              <label>Number Of Climbs:</label>
              <input type="text" name="level-4-num-climbs" ref="level-4-num-climbs" value="5" required></input><br />
              <label>Level #5:</label>
              <input type="text" name="level-5" ref="level-5" value="Red" required></input>
              <label>Number Of Climbs:</label>
              <input type="text" name="level-5-num-climbs" ref="level-5-num-climbs" value="5" required></input><br />
              <label>Level #6:</label>
              <input type="text" name="level-6" ref="level-6" value="Purple" required></input>
              <label>Number Of Climbs:</label>
              <input type="text" name="level-6-num-climbs" ref="level-6-num-climbs" value="5" required></input><br />
            </fieldset>

            <button type="submit">Submit</button>

          </form>
        )}
      </div>
    )
  }
}

const mapStateToProps = ({ addCircuit }) => ({
  ...addCircuit,
  data: addCircuit.data
})
const mapDispatchToProps = (dispatch) => ({
  addCircuit: (gym_id) => dispatch(addCircuit(gym_id))
})
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddCircuit)
