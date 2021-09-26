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

  React.useEffect(() => {
    // this is like componentDidMount
    console.log('useEffect - componentDidMount')
    // this is like componentWillUnmount
    return () => {
      console.log('useEffect - componentWillUnmount')
    }
  }, [])

  // this is like to componentDidMount and componentDidUpdate
  React.useEffect(() => {
    console.log('useEffect - componentDidMount and componentDidUpdate')
  })

  React.useEffect(() => {
    if (number % 2 !== 0) console.log('number is odd')
  }, [number])

  React.useEffect(() => {
    if (number !== 0 && number % 2 === 0) console.log('number is even')
  }, [number])

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
