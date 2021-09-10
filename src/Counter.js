import React from 'react'

export const Counter = () => {
  const [number, setNumber] = React.useState(5)

  return (
    <>
      <h1>
        {number}
      </h1>
      <button
        onClick={() => setNumber(number + 1)}
      >
        +
      </button>
      <button
        onClick={() => setNumber(number - 1)}
      >
        -
      </button>
    </>
  )
}

export default Counter
