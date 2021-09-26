import React from 'react'
import PropTypes from 'prop-types'

import { inc, dec, makeInitialState } from './counterClass.logic'

export class CounterClass extends React.Component {
  constructor (props) {
    super()

    this.state = makeInitialState(props)

    this.inc = inc.bind(this)
    this.dec = dec.bind(this)
  }

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
