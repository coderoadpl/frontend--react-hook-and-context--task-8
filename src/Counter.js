import React from 'react'

import { useCounter } from './useCounter'

export const Counter = () => {
  const {
    number,
    inc,
    dec
  } = useCounter()

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

export default Counter
