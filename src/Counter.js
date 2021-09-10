import React from 'react'

export const Counter = () => {
  const [number, setNumber] = React.useState(5)

  const inc = () => setNumber(number + 1)
  const dec = function () { setNumber(number - 1) }

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
