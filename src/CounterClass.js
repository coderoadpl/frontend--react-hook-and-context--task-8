import React from 'react'
import PropTypes from 'prop-types'

export class CounterClass extends React.Component {
  constructor (props) {
    super()

    this.state = {
      number: props.startNumber || 0
    }
  }

  inc = () => this.setState((prevState) => ({ number: prevState.number + 1 }))
  dec = () => this.setState((prevState) => ({ number: prevState.number - 1 }))

  render () {
    const { number } = this.state

    return (
      <>
        <h1>
          {number}
        </h1>
        <button
          onClick={this.inc}
        >
          +
        </button>
        <button
          onClick={this.dec}
        >
          -
        </button>
      </>
    )
  }
}

CounterClass.propTypes = {
  startNumber: PropTypes.number
}

export default CounterClass
