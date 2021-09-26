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

  // this is like componentDidMount
  React.useEffect(() => {
    console.log('useEffect - componentDidMount')
  }, [])

  // this is like to componentDidMount and componentDidUpdate
  React.useEffect(() => {
    console.log('useEffect - componentDidMount and componentDidUpdate')
  })

  console.log('RENDER')

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
