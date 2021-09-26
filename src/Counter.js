import React from 'react'
import PropTypes from 'prop-types'

import { useCounter } from './useCounter'

export const Counter = (props) => {
  const { startNumber } = props

  const {
    number,
    inc,
    dec
  } = useCounter(startNumber)

  return (
    <>
      <h1>
        {number}
      </h1>
      <button
        onClick={inc}
      >
        +
      </button>
      <button
        onClick={dec}
      >
        -
      </button>
    </>
  )
}

Counter.propTypes = {
  startNumber: PropTypes.number
}

export default Counter
