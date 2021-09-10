import React from 'react'

export const Counter = () => {
  const [number, setNumber] = React.useState(5)

  console.log('RENDER')

  return (
    <div>
      <h1>
        {number}
      </h1>
      <button
        onClick={() => setNumber((prevValue) => prevValue + 1)}
      >
        +
      </button>
      <button
        onClick={() => setNumber(number - 1)}
      >
        -
      </button>
    </div>
  )
}

export default Counter
